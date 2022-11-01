import React from "react";
import { useDropzone } from "react-dropzone";

function AcceptMaxFiles({ setCoverImage }) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      {setCoverImage(acceptedFiles)}
    </li>
  ));

  // console.log(acceptedFiles);

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  const setCover = (e) => {
    setCoverImage(acceptedFiles);
  };

  return (
    <section className="section-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input
          {...getInputProps()}
          name="cover-image"
          onChange={(e) => setCover}
        />
        <p>Only 1 image can be used as cover</p>
      </div>
      <aside>
        {/* <h4>Accepted files</h4> */}
        <ul>{acceptedFileItems}</ul>
        {/* <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul> */}
      </aside>
    </section>
  );
}

export default AcceptMaxFiles;
