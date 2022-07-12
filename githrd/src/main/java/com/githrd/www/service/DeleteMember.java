package com.githrd.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.githrd.www.dao.*;
import com.githrd.www.vo.*;

@Service
public class DeleteMember {
	@Autowired
	MemberDao mDao;
	
	@Transactional
	public void delMember(MemberVO mVO, ModelAndView mv) {
		// 할일
		// (자동 )삭제될 데이터 백업하고
		List<BoardVO> list = (List<BoardVO>) mv.getModel().get("LIST");
		List<BoardVO> rlist = (List<BoardVO>) mv.getModel().get("RLIST");
		
		for(int i = 0 ; i < list.size(); i++ ) {
			mDao.backupBoard(list.get(i));
		}
		for(int i = 0 ; i < rlist.size(); i++ ) {
			mDao.backupReBoard(rlist.get(i));
		}
		mDao.backupMember(mVO);
		// 데이터 삭제하고
		mDao.delMemb(mVO.getMno());
	}
}