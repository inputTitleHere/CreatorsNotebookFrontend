import { useRef, useState } from "react";
import { Cropper } from "react-cropper";
import { Form, Navigate, redirect, useLocation } from "react-router-dom";
import { fetchApi } from "../../../global/utils/ApiService";

export default function CreateProject() {
  // const location = ; // state도 같이 전달됨
  const teamUuid = useLocation().state;
  const cropperRef = useRef(null);
  console.log(teamUuid);
  const [projectName, setProjectName] = useState(false);
  const [projectNameLen, setProjectNameLen] = useState(0);
  const [projectImage, setProjectImage] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [inputImage, setInputImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // 프로젝트명 글자수 제한 50글자로
  const checkProjectName = (e) => {
    const len = e.target.value.length;
    setProjectNameLen(len);

    if (len === 0) {
      setProjectName(false);
    } else {
      setProjectName(true);
    }
    if (len > 49) {
      e.target.value = e.target.value.substring(0, 49);
    }
  };
  // 이미지 크로핑 하기
  const handleImageInput = (e) => {
    const name = e.target.value;
    const size = e.target.files[0].size;
    setInputImage(e.target.files[0]);
    console.log(size);
    console.log(name);
    if (/(.jpg|.png|.jpeg)$/.test(name)) {
      // do cutting
      if (size > 1024 * 1000 * 10) {
        // 10mb 이하여야 함.
        e.target.value = "";
        alert("이미지는 10MB이하여야 합니다.");
        return;
      }
      // 자르기(CropperJS)

      // 미리보기 표시하는 코드
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setProjectImage(reader.result);
      };

      console.log("TRUE");
    } else {
      e.target.value = "";
      alert("이미지는 JPG, PNG, JPEG 확장자만 가능합니다!");
    }
  };
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  return teamUuid ? (
    <div className="create-project-wrapper">
      <Form method="post" className="create-project-form">
        <div className="input-wrapper">
          <label htmlFor="projectName">
            <h2 className="title-font">프로젝트 명</h2>
            <span>
              <span className="char">{projectNameLen}</span>/50
            </span>
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="신규 프로젝트 이름. 멋지게 지어봐요!"
            onChange={checkProjectName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="projectImage" className="flex-col">
            <h2 className="title-font">프로젝트 대표사진</h2>
            {projectImage && (
              <div className="img-wrapper">
                <Cropper src={inputImage} crop={onCrop} ref={cropperRef} />
                <img src={projectImage} alt="프로젝트 이미지" />
              </div>
            )}
          </label>
          <input
            type="file"
            name="projectImage"
            id="projectImage"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageInput}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="projectDescription">
            <h2 className="title-font">프로젝트 설명</h2>
          </label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            placeholder="여기에는 프로젝트의 설명을 입력해주세요!"
          ></textarea>
        </div>
        <input type="hidden" name="teamUuid" value={teamUuid} />
        <button disabled={!projectName}>프로젝트 생성</button>
      </Form>
    </div>
  ) : (
    // 모종의 이유로 teamUuid가 없는 경우
    <Navigate to={"/dashboard"} replace={true} />
  );
}

// 생성되면 project 페이지로 redirect -> uuid같이 전달하기
export async function createProjectAction(props) {
  const formData = Object.fromEntries(await props.request.formData());
  const project = await fetchApi("/project/new", "POST", formData);
  // TODO -> project 페이지 만들기
  console.log(project);
  return redirect("/dashboard");
  // TODO 주석 해제하기
  // return redirect("/project/" + project.projectUuid);
}
