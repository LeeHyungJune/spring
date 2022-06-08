package com.githrd.www.controller;

import java.util.*;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import com.githrd.www.dao.*;
import com.githrd.www.util.*;
import com.githrd.www.vo.*;


@Controller
@RequestMapping("/gBoard")
public class GuestBoard {
	@Autowired(required=false)
	GBoardDao gDao;
	
	@RequestMapping("/gBoardList.blp")
	public ModelAndView gBOardList(ModelAndView mv, PageUtil page, HttpSession session) {
//		System.out.println("************** page.nowPage: " + page.getNowPage());
//		System.out.println("************** page.pageRow: " + page.getPageRow());
		System.out.println("************** page.nowPage: " + page.getNowPage());
		System.out.println("************** page.pageRow: " + page.getPageRow());
		System.out.println("************** page.endCont: " + page.getEndCont());
		
		String sid = (String) session.getAttribute("SID");
		if(sid != null) {
			int cnt = gDao.getMyCount(sid);
			mv.addObject("CNT", cnt);
		}
		
		
		//	총 게시글 수 조회
		int total = gDao.getTotal();
		page.setPage(total);
		
		//	게시글 목록 조회
		List<BoardVO> list = gDao.getList(page);
		
		//	데이터 심고
		mv.addObject("LIST", list);
		mv.addObject("PAGE", page);
		
		//	뷰 부르고
		mv.setViewName("gBoard/gBoardList");
			
		return mv;
	}
	
	@RequestMapping("/gBoardWrite.blp")
	public ModelAndView gBoardWrite(ModelAndView mv, HttpSession session) {
		String sid = (String) session.getAttribute("SID");
		BoardVO bVO = gDao.getWriteData(sid);
		//	데이터 심기
		mv.addObject("DATA", bVO);
		
		mv.setViewName("gBoard/gBoardWrite");
		return mv;
	}
	
	@RequestMapping("/gBoardWriteProc.blp")
	public ModelAndView gBoardWriteProc(ModelAndView mv, BoardVO bVO, int nowPage) {
		int cnt = gDao.addGBoard(bVO);
		
		String view= "/www/gBoard/gBoardList.blp";
		if(cnt != 1) {
			//	실패
			view = "/www/gBoard/gBoardWrite.blp";
			mv.addObject("NOWPAGE", nowPage);
		} 
		mv.addObject("VIEW", view);
		mv.setViewName("/gBoard/redirect");
		return mv;
	}
}
