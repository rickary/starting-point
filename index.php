<?php

	ini_set('display_errors', false);
	error_reporting(false);

	$root = __DIR__;

	$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
	$uri = urldecode($uri);
	$uri = trim($uri, '/');
	$uri = explode('/', $uri);

	$section = $uri[0] ? $uri[0] : 'home';
	$page    = $uri[1] ? $uri[1] : 'index';
	$id      = $uri[2];

	$content_file = $root . '/views/' . $section . '/' . $page . '.php';

	function current_nav($current) {
		global $section;

		if ($section == $current || ($section == 'home' && $current == '')) {
			echo 'active';
		} 
	}

	require_once $root . '/views/layout.php';
