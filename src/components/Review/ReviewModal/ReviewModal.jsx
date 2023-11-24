import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function ReviewModal({ isOpen, onRequestClose, product }) {
    const fileRef = useRef();
    const [ files, setFiles ] = useState([]);
    const [ previewImg, setPreviewImg ] = useState("");

    const handleOpenFileClick = () => {
        fileRef.current.click();
    }

    const handleChangeFile = (e) => {
        setFiles([...e.target.files]);

        const reader = new FileReader();

        reader.onload = (e) => {
            setPreviewImg(e.target.result);
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '0px',
                }
            }}
            contentLabel="Example Modal"
        >
            <div css={S.SModalContainer}>
                <h2>리뷰작성</h2>
                <div css={S.SModalHeader}>
                    <div css={S.SModalHeaderImg}>
                        <img src={product?.productDtl?.productMst.productThumbnailUrl} alt={product?.productDtl.productDtlId} />
                    </div>
                    <div>
                        <h3>{product?.productDtl?.productMst.productName}</h3>
                        <p>size: {product?.productDtl?.size.sizeName}</p>
                    </div>
                </div>
                <div css={S.SModalBody}>
                    <div css={S.SReviewImg} onClick={handleOpenFileClick}>
                        <img src={previewImg} alt="" />
                    </div>
                    <input type="file" name="reviewFile" ref={fileRef} onChange={handleChangeFile}/>
                    <textarea name=""></textarea>
                </div>
                <button css={S.SModalSubmitButton}>
                    리뷰 등록하기
                </button>
            </div>
        </Modal>
    );
}

export default ReviewModal;