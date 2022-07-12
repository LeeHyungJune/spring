package com.githrd.www.service;

import java.util.*;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.servlet.ModelAndView;

import com.githrd.www.dao.*;
import com.githrd.www.vo.*;

@Service
@Aspect
public class AdminService {
	@Autowired
	MemberDao mDao;
	
	@Before("execution(* com.githrd.www.controller.AdminPage.delMember(..))")
	public void getData(JoinPoint join) {
		MemberVO mVO = (MemberVO)join.getArgs()[1];
		ModelAndView mv = (ModelAndView) join.getArgs()[0];
		
		mVO = mDao.membInfo(mVO);
		List list = mDao.boardList(mVO.getMno());
		List rlist = mDao.reboardList(mVO.getMno());
		mv.addObject("DATA", mVO);
		mv.addObject("LIST", list);
		mv.addObject("RLIST", rlist);
	}
}