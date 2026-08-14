<?php
header('Content-Type: text/html; charset=utf-8');
$path = __DIR__ . '/index.html';
$html = is_readable($path) ? file_get_contents($path) : '';
$inject = '<script src="/agent-root/webmcp-v2.js"></script></body>';
if ($html !== false && $html !== '') {
  if (strpos($html, 'webmcp-v2.js') === false) {
    $html = str_replace('</body>', $inject, $html);
  }
  echo $html;
  return;
}
http_response_code(500);
echo 'home unavailable';
