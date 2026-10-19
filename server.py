import http.server
import socketserver
import os
import sys
import mimetypes

mimetypes.init()
mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/json', '.json')
mimetypes.add_type('image/svg+xml', '.svg')

PORT = 5173

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        if self.path in ('/', '/index.html'):
            if os.path.exists('standalone.html') and not os.path.exists('dist/index.html'):
                self.path = '/standalone.html'
        return super().do_GET()

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'text/javascript'
        if path.endswith('.css'):
            return 'text/css'
        if path.endswith('.json'):
            return 'application/json'
        if path.endswith('.svg'):
            return 'image/svg+xml'
        return super().guess_type(path)

directory = os.path.dirname(os.path.abspath(__file__))
os.chdir(directory)

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Meridian Exim local server running at: http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
except OSError:
    # If 5173 is in use, fallback to 3000
    PORT = 3000
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Meridian Exim local server running at: http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
