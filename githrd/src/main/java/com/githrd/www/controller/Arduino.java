package com.githrd.www.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.githrd.www.dao.ArduDao;
import com.githrd.www.vo.ArduVO;


@Controller
@RequestMapping("/arduino")
public class Arduino {
	@Autowired
	ArduDao aDao;
	
	//	데이터 추가 요청 처리함수
	@RequestMapping("/addData.blp")
	@ResponseBody
	public Map<String, String> addData(ArduVO aVO){
		HashMap<String, String> map = new HashMap<String, String>();
		
		int cnt = aDao.addData(aVO);
		
		String result = "OK";
		if(cnt != 1) {
			//	추가 못함
			result = "NO";
		}
		
		map.put("result", result);
		
		return map;
	}
	
	@RequestMapping("/topFive.blp")
	public ModelAndView topFive(ModelAndView mv) {
		//	데이터 꺼내고
		List<ArduVO> list = aDao.getTopFive();
		
		
		mv.addObject("LIST", list);
		mv.setViewName("arduino/topFive");
		
		return mv;
	}
	
	@RequestMapping("/addCount.blp")
	@ResponseBody
	public Map<String, String> addCount(){
		HashMap<String, String> map = new HashMap<String, String>();
		
//		String sdate = new SimpleDateFormat("yyyy/MM/dd").format(new Date());
		
//		int cnt = aDao.addCount(sdate);
		int cnt = aDao.addCount();
		
		String result = "OK";
		
		if(cnt != 1) {
			result = "NO";
		}
		
		map.put("result", result);
		
		return map;
	}
	
	//	온습도 측정데이터 추가 요청 전담 처리함수
	@RequestMapping("/addTemp.blp")
	@ResponseBody
	public Map<String, String> addDHT(ArduVO aVO){
		Map<String, String> map = new HashMap<String, String>();
		String result = "Success";
		
		int cnt = aDao.addTmpHum(aVO);
		if(cnt != 1) {
			result = "Fail";
		}
		map.put("result", result);
		
		return map;
	}
	
}
