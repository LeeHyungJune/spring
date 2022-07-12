CREATE TABLE MEMBER_BACK
AS
    SELECT
        m.*, sysdate backup_date
    FROM
        member m
    WHERE
        1 = 2   
;

ALTER TABLE member_back
MODIFY BACKUP_DATE
    CONSTRAINT MEMBBACK_BDATE_NN NOT NULL;

--  이렇게 할 경우 제약 조건 때문에 삭제가 안됨    
DELETE FROM member
WHERE
    mno = 1018;
    
--  이럴때는 제약 조건을 비활성 시킨 후 작업하면 된다.
ALTER TABLE guestboard
DISABLE CONSTRAINT GBRD_WRITER_FK;

ALTER TABLE board
DISABLE CONSTRAINT BRD_MNO_FK;

ALTER TABLE reboard
DISABLE CONSTRAINT RBRD_MNO_FK;

ALTER TABLE survey
DISABLE CONSTRAINT SV_MNO_FK;

DELETE FROM member
WHERE
    mno = 1016;

-- 제약조건 다시 활성화
ALTER TABLE guestboard
ENABLE CONSTRAINT GBRD_WRITER_FK;

ALTER TABLE board
ENABLE CONSTRAINT BRD_MNO_FK;

ALTER TABLE reboard
ENABLE CONSTRAINT RBRD_MNO_FK;

ALTER TABLE survey
ENABLE CONSTRAINT SV_MNO_FK;



CREATE TABLE SURVEY_BACK
AS
    SELECT
        s.*, sysdate backup_date
    FROM
        survey s
    WHERE
        1 = 2   
;

CREATE TABLE BOARD_BACK
AS
    SELECT
        b.*, sysdate backup_date
    FROM
        board b
    WHERE
        1 = 2   
;

CREATE TABLE REBOARD_BACK
AS
    SELECT
        r.*, sysdate backup_date
    FROM
        reboard r
    WHERE
        1 = 2
;

CREATE TABLE GUESTBOARD_BACK
AS
    SELECT
        g.*, sysdate backup_date
    FROM
        guestboard g
    WHERE
        1 = 2   
;

ALTER TABLE survey_back
MODIFY BACKUP_DATE
    CONSTRAINT SVBACK_BDATE_NN NOT NULL;
    
ALTER TABLE board_back
MODIFY BACKUP_DATE
    CONSTRAINT BRDBACK_BDATE_NN NOT NULL;
    
ALTER TABLE reboard_back
MODIFY BACKUP_DATE
    CONSTRAINT RBRDBACK_BDATE_NN NOT NULL;    

ALTER TABLE guestboard_back
MODIFY BACKUP_DATE
    CONSTRAINT GBRDBACK_BDATE_NN NOT NULL;

commit;

-------------------------------------------------------------------

--  삭제 질의명령
--  MEMBER
DELETE FROM member
WHERE
    mno = #{mno}
;

--  BOARD
DELETE FROM board
WHERE
    bno IN (
            SELECT 
                bno 
            FROM 
                board 
            WHERE 
                bmno = #{mno} 
            )
;

--  GUESTBOARD
DELETE FROM guestboard
WHERE
    gno IN (
            SELECT
                gno
            FROM
                guestboard
            WHERE
                writer = #{mno}
            )
;

--  REBOARD
DELETE FROM reboard
WHERE
    rbno IN (
            SELECT
                DISTINCT rbno
            FROM
                reboard
            WHERE
                isshow = 'Y'
            START WITH
                rbmno = #{mno}
            CONNECT BY
                PRIOR rbno = upno
            )
;

--  survey

--  제약조건 수정
ALTER TABLE survey
DROP CONSTRAINT SV_MNO_FK;

ALTER TABLE survey
ADD CONSTRAINT 
    SV_MNO_FK FOREIGN KEY(smno) REFERENCES member(mno)
    ON DELETE CASCADE;

UPDATE survey
SET
    smno = null
WHERE
    smno = 1017
;


DELETE FROM MEMBER WHERE mno = 1017;

/*
SELECT
    DISTINCT rbno
FROM
    reboard
WHERE
    isshow = 'Y'
START WITH
    rbmno = #{mno}
CONNECT BY
    PRIOR rbno = upno
;
*/