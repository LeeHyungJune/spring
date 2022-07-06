package com.githrd.www.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import com.githrd.www.vo.ProductVO;

public class ProductDao {
	@Autowired
	SqlSessionTemplate sqlSession;
	
	public List<ProductVO> getCateList(){
		return sqlSession.selectList("pSQL.startCate");
	}
	
	public List<ProductVO> getCateList(ProductVO pVO){
		return sqlSession.selectList("pSQL.cateList", pVO);
	}
}
