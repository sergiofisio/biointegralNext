<?php
header('Content-Type: text/html; charset=utf-8');
$htmlPath = __DIR__ . '/index.html';
$jsPath = __DIR__ . '/ad2/webmcp.js';
$html = is_readable($htmlPath) ? file_get_contents($htmlPath) : '';
$js = is_readable($jsPath) ? file_get_contents($jsPath) : '';
if ($html === false || $html === '') {
  http_response_code(500);
  echo 'home unavailable';
  return;
}
if ($js !== false && $js !== '' && strpos($html, 'navigator.modelContext.provideContext') === false) {
  $html = str_replace('</body>', '<script>' . $js . '</script></body>', $html);
}
echo $html;
