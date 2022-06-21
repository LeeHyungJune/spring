package com.githrd.www.util;

import java.io.File;

/**
 * 이 클래스는 파일 업로드에 필요한 기능을 처리하기 위해서 
 * 만든 유틸리티적인 클래스
 * @author LHJ
 * @since  2022.06.21
 * @version v.1.0
 * 		
 * 			작업이력 )
 * 				2022.06.21		-	담당자	:	이형준
 * 									클래스 제작
 */

public class FileUtil {
	/*
	 	파일 이름이 중복되면 이전에 업로드한 파일에 덮어쓰기가 된다.
	 	따라서 혹시 같은 이름의 파일이 존재하면
	 	파일 이름을 바꿔서 저장해줘야
	 	이전에 업로드 된 동일한 이름의 파일도 유지가 되고
	 	내가 현재 업로드하는 파일도 저장이 된다.
	 */
	
	public static String rename(String path, String oldName) {
		/*
		 	리네임 정책 설정 )
		 		혹시 같은 이름의 파일이 존재하면 "(숫자)" 
		 		를 붙여서 이름을 바꾸는 방식을 사용한다. 
			
			예 )
				sample.jpg 라는 파일을 업로드하려하는데
				이미 업로드된 파일의 이름이 존재하면
				==>	sample(1).jpg 
				라는 이름으로 변경시켜서 저장해야 한다.
		 */
		
		int count = 0;	//	동일한 파일 이름의 경우 붙여질 번호를 기억할 변수
		
		String newName = oldName;
		
		File file = new File(path, newName);
		
		while(file.exists()) {
			//	이 경우는 이미 newName 으로 저장된 파일이 존재하는 경우 이므로
			//	파일의 이름을 다시 만들어야 한다.
			count++;
			int len = oldName.lastIndexOf(".");
			String preName = oldName.substring(0, len);	//	파일 이름만 분리
			String ext = oldName.substring(len);	//	확장자 분리
			
			newName = preName + "(" + count + ")" + ext;
			
			file = new File(path, newName);
		}
		
		return newName;
	}
}