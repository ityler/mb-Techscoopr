<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class News_Model extends CI_Model {
	
	public function __construct()	{
  		$this->load->database(); 
	}

	public function get_news_latest(){
		$this->db->order_by('PubDate','DESC');
		$query = $this->db->get('Articles', 50);
			return $query->result();
	}

	public function get_news_item($id){
  		if($id != FALSE){
    		$query = $this->db->get_where('news', array('id' => $id));
    		return $query->row_array();
  		} else {
    		return FALSE;
  		}
	}
}