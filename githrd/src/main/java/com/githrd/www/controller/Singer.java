package com.githrd.www.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import com.githrd.www.vo.*;
import com.githrd.www.dao.*;

@Controller
@RequestMapping("/singer")
public class Singer {
	
	@Autowired
	SingerDao songDao;
	
	@RequestMapping("/singer.blp")
	public ModelAndView singerInfo(ModelAndView mv) {
		mv.setViewName("singer/singer");
		
		return mv;
	}
	
	@RequestMapping("/singerList.blp")
	@ResponseBody
	public List<SingerVO> singerList(SingerVO songVO) {
		List<SingerVO> list = songDao.singerList(songVO);
		
		return list;
	}
	
	@RequestMapping("/memberList.blp")
	@ResponseBody
	public List<SingerVO> memberList(SingerVO songVO) {
		List<SingerVO> list = songDao.memberList(songVO.getNum());
		
		return list;
	}
	
	@RequestMapping("/getPhoto.blp")
	@ResponseBody
	public SingerVO getPhoto(SingerVO songVO) {
		songVO.setSname(songDao.getPhoto(songVO.getNum()));
		
		return songVO;
	}
	
}
