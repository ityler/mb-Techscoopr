<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class News extends CI_Controller {
	
	public function index(){
		$this->load->helper('url');
		$this->load->view('home');
	}

	public function gn(){
       $this->load->model('News_Model');
       $data['results'] = $this->News_Model->get_news_latest();
       $this->output->set_output(json_encode($data));
   }


}