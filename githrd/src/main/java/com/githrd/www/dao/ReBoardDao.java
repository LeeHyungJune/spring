package com.githrd.www.dao;

import java.util.*;

import org.mybatis.spring.*;
import org.springframework.beans.factory.annotation.*;

import com.githrd.www.util.*;
import com.githrd.www.vo.*;
/**
 * 이 클래스는 댓글 게시판 관련 데이터베이스 전담 처리함수들로 구성된 클래스
 * @author LHJ
 * @since  2022.06.08
 * @version v.1.0
 * 
 * 			작업이력 )
 * 					2022.06.08	-	담당자 이형준
 * 										클래스 제작, 리스트 조회
 */
public class ReBoardDao {
	@Autowired
	SqlSessionTemplate sqlSession;
	
//	게시글 리스트 조회 전담 처리함수
	public List<BoardVO> getList(PageUtil page) {
		return sqlSession.selectList("rSQL.getList", page);
	}
	
	//	총 게시글 수 조회 전담 처리함수
	public int getTotal() {
		return sqlSession.selectOne("rSQL.getTotal");
	}
}
