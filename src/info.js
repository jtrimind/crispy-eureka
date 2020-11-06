import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { Dialog, DialogContentText, DialogTitle } from '@material-ui/core';

function Info() {
  const [ open, setOpen ] = useState(false);
  return (
    <>
      <Button onClick={() => { setOpen(true) }}>
        <InfoIcon />
      </Button>
      <Dialog open={open}>
        <DialogTitle>당장약국은?</DialogTitle>
        <DialogContentText>
          지금 당장 찾아갈 수 있는 약국을 바로 확인할 수 있게 개발된 서비스 입니다.
          국립중앙의료원에서 공개하는 전국 약국 정보를 토대로 제공되며, 본 서비스에서 안내되는 약국의 실제 영업여부는 각 약국의 사정에 따라 변동 될 수 있습니다.
          문의사항 :
        </DialogContentText>
        <Button onClick={() => { setOpen(false) }}>닫기</Button>
      </Dialog>
    </>
  )
}

export default Info;
