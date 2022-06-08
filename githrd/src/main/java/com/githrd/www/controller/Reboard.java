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
/**
 * 이 클래스는 댓글게시판 관련 요청을 처리할 클래스
 * @author LHJ
 * @since  2022.06.08
 * @version v.1.0
 * 
 * 			작업이력 )
 * 					2022.06.08	-	담당자 이형준
 * 										클래스 제작, 리스트 보기 요청 처리
 */
@Controller
@RequestMapping("/reBoard")
public class Reboard {
	@Autowired(required=false)
	ReBoardDao rDao;
	
	/**
	 * 댓글게시판 리스트보기 요청
	 */
	@RequestMapping("/reBoardList.blp")
	public ModelAndView reBoardList(ModelAndView mv, PageUtil page, String msg) {
		//	할일
		//	데이터베이스에서 데이터 가져오고
		//	PageUtil 이 먼저 만들어져야 하기 때문에
		//	총 게시글 수부터 가져온다.
		int total = rDao.getTotal();
		page.setPage(total);
		
		//	리스트 조회
		List<BoardVO> list = rDao.getList(page);
		
		if(msg != null) {
			mv.addObject("MSG", msg);
		}
		
		mv.addObject("LIST", list);
		mv.addObject("PAGE", page);
		mv.setViewName("reBoard/reBoardList");
		
		return mv;
	}
	
	//	댓글 쓰기 폼보기 요청
	@RequestMapping(path="/reBoardWrite.blp", method=RequestMethod.POST, params={"id","nowPage"})
	public ModelAndView reBoardWrite(ModelAndView mv, String id, String nowPage) {
		
		BoardVO bVO = rDao.getWriterInfo(id);
		
		mv.addObject("DATA", bVO);
		
		mv.setViewName("reBoard/reBoardWrite");
		
		return mv;
	}
	
	//	게시글 쓰기 처리요청
	@RequestMapping("/writeProc.blp")
	public ModelAndView reBoardWrite(ModelAndView mv, BoardVO bVO, String nowPage) {
		int cnt = rDao.addReBoard(bVO);
		
		String view = "/www/reBoard/reBoardList.blp";
		
		if(cnt != 1) {
			//	실패
			view = "/www/reBoard/reBoardWrite.blp";
		} else {
			//	글 등록 성공
			nowPage= "1";
			mv.addObject("MSG", "게시글 등록에 성공했습니다.");
		}
		
		mv.addObject("VIEW", view);
		mv.addObject("NOWPAGE", nowPage);
		
		mv.setViewName("reBoard/redirect");
		
		return mv;
	}
	
}
