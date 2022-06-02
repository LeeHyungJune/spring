package com.githrd.www.controller;

import java.util.*;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;
import org.springframework.web.servlet.view.RedirectView;

import com.githrd.www.dao.MemberDao;
import com.githrd.www.vo.MemberVO;

@Controller
@RequestMapping("/member")
public class Member {
	@Autowired
	MemberDao mDao;
	
	@RequestMapping("/login.blp")
	public ModelAndView loginForm(ModelAndView mv, HttpSession session, HttpServletResponse resp) {
		mv.setViewName("/member/login");
		return mv;
	}
	/*
		 public String loginForm(HttpSession session, HttpServletResponse resp) {
			
			return "member/login";
		} 
	 
	 */
	
	@RequestMapping(path="/loginProc.blp", method=RequestMethod.POST, params={"id","pw"})
	public ModelAndView loginProc(MemberVO mVO, HttpSession session, ModelAndView mv, RedirectView rv) {
		/*
		System.out.println("### 일반 사용자");
		System.out.println("********* id : " + id);
		System.out.println("********* pw : " + pw);
		System.out.println("********* mVO.id : " + mVO.getId());
		System.out.println("********* mVO.pw : " + mVO.getPw());
		*/
		
		int cnt = mDao.getLogin(mVO);
		
		if(cnt == 1) {
			session.setAttribute("SID", mVO.getId());
			rv.setUrl("/www/main.blp");
		} else {
			rv.setUrl("/www/member/login.blp");
		}
		mv.setView(rv);
		return mv;
	}
	
	/*
	  	public ModelAndView loginProc(String id, String pw, MemberVO mVO, HttpSession session, ModelAndView mv) {
		
		System.out.println("### 일반 사용자");
		System.out.println("********* id : " + id);
		System.out.println("********* pw : " + pw);
		System.out.println("********* mVO.id : " + mVO.getId());
		System.out.println("********* mVO.pw : " + mVO.getPw());
		
		
		int cnt = mDao.getLogin(mVO);
		String view = "";
		if(cnt == 1) {
			session.setAttribute("SID", mVO.getId());
			view = "redirect:../main.blp";
		} else {
			view = "redirect:login.blp";
		}
		mv.setViewName(view);
		return mv;
		}
	 
	 */
	
	@RequestMapping(path="/loginProc.blp", params="id=admin")
	public ModelAndView adminLogin(MemberVO mVO, HttpSession session, ModelAndView mv, RedirectView rv) {
		System.out.println("### 관리자");
		
		int cnt = mDao.getLogin(mVO);
		
		if(cnt == 1) {
			session.setAttribute("SID", mVO.getId());
			rv.setUrl("/www/main.blp");
		} else {
			rv.setUrl("/www/member/login.blp");
		}
		mv.setView(rv);
		return mv;
	}
	/*
	 	public ModelAndView adminLogin(MemberVO mVO, HttpSession session, ModelAndView mv) {
		System.out.println("### 관리자");
		
		int cnt = mDao.getLogin(mVO);
		String view = "";
		if(cnt == 1) {
			session.setAttribute("SID", mVO.getId());
			view = "redirect:../main.blp";
		} else {
			view = "redirect:login.blp";
		}
		mv.setViewName(view);
		return mv;
		}
	 */
	
	@RequestMapping("/logout.blp")
	public ModelAndView logout(ModelAndView mv, HttpSession session, RedirectView rv) {
		session.removeAttribute("SID");
		rv.setUrl("/www/");
		mv.setView(rv);
		return mv;
	}
	
	@RequestMapping(path="/idCheck.blp", 
					method=RequestMethod.POST, params="id")
	@ResponseBody
	public Map<String, String> idCheck(String id) {
		HashMap<String, String> map = new HashMap<String, String>();
		String result = "NO";
		
		int cnt = mDao.getIdCnt(id);
		
		if(cnt == 0) {
			result = "OK";
		}
		
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(path="/join.blp")
	public ModelAndView joinForm(ModelAndView mv, RedirectView rv) {
		List<MemberVO> list = mDao.getAvtList();
		
		//	데이터 심고
		mv.addObject("LIST", list);
		mv.setViewName("/member/join");
		
		return mv;
	}
	/*
	 	public String joinForm() {
		String view = "/member/join";
		return view;
	}
	 */
	
	@RequestMapping(path="/joinProc.blp")
	public ModelAndView joinProc(MemberVO mVO, HttpSession session, 
								ModelAndView mv, RedirectView rv) {
		
		int cnt = mDao.addMember(mVO);
		if(cnt == 1) {
			//	성공한 경우
			session.setAttribute("SID", mVO.getId());
			rv.setUrl("/www/");
		} else {
			rv.setUrl("/www/member/join.blp");
		}
		mv.setView(rv);
		
		return mv;
	}
}