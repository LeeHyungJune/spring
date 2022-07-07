package com.githrd.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.githrd.www.dao.*;
import com.githrd.www.vo.*;

@Controller
@RequestMapping("/cate")
public class Product {
	@Autowired
	ProductDao pDao;
	
	@RequestMapping("/product.blp")
	public ModelAndView productMain(ModelAndView mv, ProductVO pVO) {
		List<ProductVO> list = pDao.getCateList(pVO);
		
		// 데이터 심고
		mv.addObject("LIST", list);
		// 뷰 부르고
		mv.setViewName("cate/product");
		return mv;
	}
	
	@RequestMapping("/cateList.blp")
	@ResponseBody
	public List<ProductVO> cateList(ProductVO pVO){
		List<ProductVO> list = pDao.getCateList(pVO);
		
		return list;
	}
	
	@RequestMapping("/productList.blp")
	@ResponseBody
	public List<ProductVO> productList(ProductVO pVO) {
		List<ProductVO> list = pDao.getProductList(pVO);
		
		return list;
	}
	
	@RequestMapping("/productDetail.blp")
	public ModelAndView productDetail(ModelAndView mv, ProductVO pVO) {
		
		pVO = pDao.getProductDetail(pVO);
		
		mv.addObject("DATA", pVO);
		mv.setViewName("cate/productDetail");
		
		return mv;
	}
}
