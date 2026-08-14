<?php
http_response_code(400);
header('Content-Type: application/json; charset=utf-8');
echo json_encode([
  'error' => 'invalid_request',
  'error_description' => 'Agent registration is human-reviewed. See https://www.biointegralsaude.com.br/auth.md',
], JSON_UNESCAPED_SLASHES);
