import styled from "styled-components";
import { useRef, useState } from "react";
import { set } from "firebase/database";
const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const TextArea = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background: black;
  width: 100%;
  resize: none;
  &::placeholder {
    font-size: 16px;
    font-family: "system-ui", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf9;
  }
`;

const AttachFileButton = styled.label`
  padding: 10px 0px;
  color: #1d9bf0;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitBtn = styled.input`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;

const ImgWrpapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyeldImg = styled.img`
  width: 100px;
  height: 100px;
`;

const PostTweet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tweet, setTweet] = useState("");
  const [imgfile, setimgFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const onChnage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e?.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
    console.log(file);
  };

  const changeImage = () => {
    const file = imgRef.current?.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimgFile(reader.result);
    };
  };

  return (
    <Form>
      <TextArea
        rows={5}
        maxLength={200}
        onChange={onChnage}
        placeholder="what is happening?"
        value={"tweet"}
      />
      <ImgWrpapper>
        <StyeldImg src={imgfile ? imgfile : "./public/vite.svg"} />
      </ImgWrpapper>
      <AttachFileButton htmlFor="file">
        {imgfile ? "file Added✅" : "AddPhoto"}
      </AttachFileButton>
      <AttachFileInput
        id="file"
        accept="image/*"
        type="file"
        onChange={changeImage}
        ref={imgRef}
      />
      <SubmitBtn
        type="submit"
        value={isLoading ? "Posting..." : "post Tweet"}
      />
    </Form>
  );
};

export default PostTweet;
