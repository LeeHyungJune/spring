package com.githrd.www.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.githrd.www.dao.*;
import com.githrd.www.service.*;
import com.githrd.www.vo.*;


@Controller
@RequestMapping("/admin")
public class AdminPage {
	@Autowired
	DeleteMember dMemb;
	@Autowired
	MemberDao mDao;
	
	// 관리자페이지 폼보기요청 처리함수
	@RequestMapping("/adminPage.blp")
	public ModelAndView adminPage(ModelAndView mv) {
		List<String> list = mDao.idList();
		mv.addObject("LIST", list);
		
		// 뷰 부르고
		mv.setViewName("member/admin");
		return mv;
	}
	
	//  회원 데이터 삭제 요청 처리함수
	@RequestMapping("/delMember.blp")
	public ModelAndView delMember(ModelAndView mv, MemberVO mVO, RedirectView rv) {
		mVO  = (MemberVO) mv.getModel().get("DATA");
		String result = "삭제 작업 실패";
		try {
			 dMemb.delMember(mVO, mv);
			 result = mVO.getId() + "  회원 삭제 성공";
		} catch(Exception e) {
			e.printStackTrace();
			result = "삭제 작업 실패";
			System.out.println(result);
		}
		
		mv.addObject("MSG", result);
		rv.setUrl("/www/admin/adminPage.blp");
		mv.setView(rv);
		return mv;
	}
}