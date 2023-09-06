import React, { useSyncExternalStore } from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { GradientText } from "react-beautiful-gradients";

import Dialog from "./Dialog";
import Dialog1 from "./Dialog1";
import Model from "./Model";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import srcimg from "./USNavy-MQ-25_F-35_Refueling_wF-18-F.jpg";
import imgSource from "./USNavy-MQ-25_F-35_Refueling_wF-18-F.jpg";
import Logo from "./ARCTICTERN-LOGO.png";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { AiOutlineDelete, AiOutlineZoomIn } from "react-icons/ai";
import { GrSelect } from "react-icons/gr";
import { IconContext } from "react-icons";
import { FaDrawPolygon } from "react-icons/fa";
import { FiLogOut, FiEdit } from "react-icons/fi";
import { AiOutlineCloud } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";
import { ImUndo2, ImRedo2 } from "react-icons/im";
import { MdBorderStyle } from "react-icons/md";
import { CiEdit, CiImport } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiExportOutline } from "react-icons/ti";
import { TbZoomCode, TbPolygon } from "react-icons/tb";

import { Tooltip } from "@mui/material";
import DropDown from "../components/dropdown.jsx";
import "./Dialog1.css";

import { AuthContext } from "../components/authcontext";
import { useHistory } from "react-router-dom";
import "../components/Navbar.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Position from "rsuite/esm/Overlay/Position";
import './Color.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PolyDel from "../pages/PolyDelDialog.jsx";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
    id="mui-accordion-label-list"
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(44, 83, 100, 1)"
      : "rgba(0, 0, 0, 0.3)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(12),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Canvas1() {
  const nxtImgBtn = useRef(null);
  const prevImgBtn = useRef(null);
  const addDataBtn = useRef(null);
  const sixthImgBtn = useRef(null);
  const [coord, setCoord] = useState([]);
  const [imgRefC, setImgRefC] = useState([]);
  const [d1coordx, setD1coordx] = useState();
  const [d1coordy, setD1coordy] = useState();
  const [elements, setElements] = useState([]);
  const [elements1, setElements1] = useState([]);
  const [elements2, setElements2] = useState([]);
  const [elements3, setElements3] = useState([]);
  const [coord1, setCoord1] = useState([]);
  const [coord2, setCoord2] = useState([]);
  const [center, setCenter] = useState([]);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [height1, setHeight1] = useState();
  const [width1, setWidth1] = useState();
  const [visible, setVisible] = useState(false);
  const [draw, setDraw] = useState(false);
  const [polyDraw, setPolyDraw] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [delIndex, setDelIndex] = useState();
  const [delIndex1, setDelIndex1] = useState();
  const [dialog1, setDialog1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [index1, setIndex1] = useState();
  const [btnClr, setBtnClr] = useState(false);
  const [expanded, setExpanded] = useState();
  const [class2, setClass2] = useState("");
  const [grpId1, setGrpId1] = useState("1");
  const [bins1, setBins1] = useState("");
  const [d1height1, setD1height1] = useState();
  const [checked1, setChecked1] = useState("");
  const [data4, setData4] = useState([]);
  const [fileList, setFileList] = useState([]);
  // const [jsonList, setJsonList] = useState([]);
  const [droppedFile, setDroppedFile] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgSource1, setImgSource1] = useState("");
  const [edit1, setEdit1] = useState(false);
  const [editData, setEditData] = useState([]);
  // const [dialogData, setDialogdata] = useState([]);
  const [editCoord, setEditCoord] = useState([]);
  const [editImgRef, setEditImgRef] = useState([]);
  const [edit2, setEdit2] = useState(false);
  const [editData2, setEditData2] = useState([]);
  const [editCoord2, setEditCoord2] = useState([]);
  const [edit3, setEdit3] = useState(false);
  const [editCoord3, setEditCoord3] = useState([]);
  const [editData3, setEditData3] = useState([]);
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const dropdownRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  // const [transformOrigin, setTransformOrigin] = useState([]);
  // const containerRef = useRef(null);
  const [imgName, setImgName] = useState("");
  const [base64, setBase64] = useState("");
  var zoomDelta = 0;
  var deltaY = 0;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // var posX;
  // var posY;
  // var mouseX;
  // var mouseY;
  const [base64toimg, setBase64toimg] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const [elementsMaster, setElementsMaster] = useState([]);
  const [elementsMaster1, setElementsMaster1] = useState([]);
  const [elementsMaster2, setElementsMaster2] = useState([]);
  const [listDataMaster, setListDataMaster] = useState([]);


  const [drawBtnClr, setDrawBtnClr] = useState({
    color: "#FFC596",
  });
  const [editBtnClr, setEditBtnClr] = useState({
    color: "#FFC596",
  });
  const [delBtnClr, setDelBtnClr] = useState({
    color: "#FFC596",
  });
  const [ZoomBtnClr, setZoomBtnClr] = useState({
    color: "#FFC596"
  });

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  const colorsData = [
    { Id: 1, value: 'red', View: false, objectName: 'Car', count: 0 },
    { Id: 2, value: 'green', View: false, objectName: 'Tree', count: 0 },
    { Id: 3, value: 'blue', View: false, objectName: 'Building', count: 0 },
    { Id: 4, value: 'yellow', View: false, objectName: 'Road', count: 0 },
    { Id: 5, value: 'magenta', View: false, objectName: 'Signal', count: 0 },
    { Id: 6, value: 'cyan', View: false, objectName: 'Sky', count: 0 },
  ];
  const [colors, setColors] = useState(colorsData);
  const [background, setBackground] = useState('#FFFFFF');
  const [searchTerm, setSearchTerm] = useState('');

  var data3 = [];
  var data5 = [];
  var listItems1;
  var listItems2 = [];

  elements1.forEach((element) => {
    if (element != null && element !== undefined && element !== "") {
      data3.push(element);
    }
  });

  data4.forEach((element) => {
    if (element != null && element !== undefined && element !== "") {
      data5.push(element);
    }
  });

  listItems1 = data3.map((data31) => [
    data31.props.height,
    data31.props.width,
    data31.props.x,
    data31.props.y,
  ]);

  var listItems3 = data5.map((subarray) => [
    subarray[0],
    subarray[1],
    subarray[2],
    subarray[3],
    subarray[4],
  ]);

  for (let i = 0; i < listItems3.length; i++) {
    let innerArray = [];
    if (listItems3[i] === undefined) {
      listItems3[i] = [];
    }
    if (listItems1[i] === undefined) {
      listItems1[i] = [];
    }
    for (let j = 0; j < listItems3[i].length; j++) {
      innerArray.push(listItems3[i][j], listItems1[i][j]);
    }
    listItems2.push(innerArray);
  };

  for (let i = 0; i < listItems2.length; i++) {
    delete listItems2[i][9];
  };

  var listItems = listItems2.map((childarray, index) => (
    <li id={index}><Accordion
      expanded={index === expanded}
      onChange={() => handleChange({ index })}
    >
      <AccordionSummary aria-controls="panel1d-content" id={index}>
        <Typography className="labellist-index">{childarray[0]}</Typography>
      </AccordionSummary>
      <AccordionDetails className="params">
        <Typography>
          <div className="grid_item">Position X:{childarray[5]}</div>
          <div className="grid_item">Position Y:{childarray[7]}</div>
          <div className="grid_item">Height:{childarray[1]}</div>
          <div className="grid_item">Width:{childarray[3]}</div>

          <div className="grid_item">Class:{childarray[0]}</div>
          <div className="grid_item">Group ID:{childarray[8]}</div>
          <div className="grid_item">Actual height:{childarray[4]}</div>
          <div className="grid_item">Orientation:{childarray[2]}</div>
          {/* <div className="grid_item">Yaw: </div>
        <div className="grid_item">Pitch: </div>
        <div className="grid_item">Roll: </div> */}
          <div className="grid_item">Transmission:{childarray[6]} </div>
          {/* <div className="grid_item">Distance: </div> */}
        </Typography>
      </AccordionDetails>
    </Accordion></li>
  ));

  const handleBackgroundChange = (color) => {
    setBackground(color);
  };

  const handleSelection = (Id) => {
    const updatedColors = colors.map((color) => {
      if (color.Id === Id) {
        return {
          ...color,
          selected: !color.selected,
          count: color.selected ? color.count : color.count + 1,
        };
      }
      return color;
    });
    setColors(updatedColors);

    const selectedColor = updatedColors.find((color) => color.Id === Id);
    if (selectedColor.selected) {
      handleBackgroundChange(selectedColor.value);
    } else {
      handleBackgroundChange('#FFFFFF');
    }
  };

  const handleEyeClick = (Id) => {
    const updatedColors = colors.map((color) => {
      if (color.Id === Id) {
        return {
          ...color,
          selected: !color.selected,
          count: color.selected ? color.count : color.count + 1,
        };
      } else if (color.selected) {
        return {
          ...color,
          selected: false,
          count: color.count - 1,
        };
      }
      return color;
    });
    setColors(updatedColors);

    const selectedColor = updatedColors.find((color) => color.Id === Id);
    if (selectedColor.selected) {
      handleBackgroundChange(selectedColor.value);
    } else {
      handleBackgroundChange('#FFFFFF');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const generateColorPalette = () => {
    const filteredColors = colors.filter((color) =>
      color.objectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredColors.map((color) => (
      <tr key={color.Id}>
        <td className="table_data">{color.Id}</td>
        <td className="table_data">{color.objectName}</td>
        <td
          style={{
            backgroundColor: color.value,
            cursor: 'pointer',
          }}
          onClick={() => handleSelection(color.Id)} className="table_data"
        ></td>
        <td className="table_data">
          {color.selected ? (
            <FaEyeSlash onClick={() => handleEyeClick(color.Id)} />
          ) : (
            <FaEye onClick={() => handleEyeClick(color.Id)} />
          )}
        </td>
        <td className="table_data">{color.count}</td>
      </tr>
    ));
  };

  const handleNextImage = () => {
    if (imgIndex < fileList.length - 1) {
      pushToMaster();
      const nextImage = fileList[imgIndex + 1];
      setImgIndex(imgIndex + 1);
      setImgSource1(URL.createObjectURL(nextImage));
      loadFromMaster(imgIndex + 1);
    } else {
      alert("End of File List");
    }
  };

  const handlePreviousImage = () => {
    if (imgIndex > 0) {
      pushToMaster();
      setImgIndex(imgIndex - 1);
      setImgSource1(URL.createObjectURL(fileList[imgIndex - 1]));
      loadFromMaster(imgIndex - 1);
    } else {
      alert("Displaying first image");
    }
  };

  const pushToMaster = () => {
    elementsMaster[imgIndex] = [...elements];
    elementsMaster1[imgIndex] = [...elements1];
    elementsMaster2[imgIndex] = [...elements2];
    listDataMaster[imgIndex] = [...data4];

    setElements([]);
    setElements1([]);
    setElements2([]);
    setData4([]);
  };

  const loadFromMaster = (index) => {
    setElements([...elementsMaster[index]]);
    setElements1([...elementsMaster1[index]]);
    setElements2([...elementsMaster2[index]]);
    setData4([...listDataMaster[index]]);
  };

  const handleSkipFour = () => {
    const newIndex = imgIndex + 5;
    if (newIndex >= fileList.length) {
      alert("End of File List!");
      return;
    }
    setImgIndex(newIndex);
    setImgSource1(URL.createObjectURL(fileList[newIndex]));
  };

  const handleChange = (hi) => {
    if (hi.index === expanded) {
      setExpanded();
    } else {
      setExpanded(hi.index);
    }
  };

  const handleBinsChange = (value) => {
    setBins1(value);
  };

  const handleD1heightChange = (value) => {
    setD1height1(value);
  };

  const handleD1CheckedChange = (value) => {
    value ? setChecked1("True") : setChecked1("False");
  };

  function handleClass1Change(value) {
    setClass2(value);
    if (class2 == "Bus") {
      setGrpId1("2");
    } else if (class2 == "Motorbike") {
      setGrpId1("3");
    } else if (class2 == "Truck") {
      setGrpId1("4");
    } else {
      setGrpId1("1");
    }
  };

  const handleDialog1OK = (choose) => {
    if (draw) {
      if (choose) {
        setIsOpen(false);
        setData4([...data4, [class2, bins1, d1height1, checked1, grpId1]]);
      }
    }
  };

  const handleDialog1C = (choose) => {
    if (choose) {
      setIsOpen(false);
      elements.pop();
      elements1.pop();
      elements2.pop();
    }
  };

  const handleDelete1 = (choose) => {
    if (choose === true) {
      setDialog({
        message: "",
        isLoading: false,
      });
      setDialog1(true);
      setDelIndex1(delIndex);
    } else if (choose === false) {
      setDialog({
        message: "",
        isLoading: false,
      });
      setDialog1(false);
    }
  };



  const areUSureDelete = (type) => { };

  //const gElement = document.getElementsByTagName("g")[0];

  //gElement.addEventListener('click', function(event){
  //    console.log(this.getAttribute('key'))
  //})

  const handleMouseMove = (event) => {
    setImgRefC([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
  };

  const handleMouseDown = (event) => {
    if (draw) {
      let coordinates = [event.nativeEvent.offsetX, event.nativeEvent.offsetY];
      setCoord(coordinates);
      console.log(...coord);
      setDraw(true);
      setVisible(true);
      let d1coordinates = [event.offsetX, event.offsetY];
      setD1coordx(d1coordinates[0]);
      setD1coordy(d1coordinates[1]);
    }
  };

  const handleFolderSelect = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const directoryInput = document.createElement("input");
    directoryInput.setAttribute("type", "file");
    directoryInput.setAttribute("webkitdirectory", true);
    directoryInput.setAttribute("directory", true);
    directoryInput.setAttribute("multiple", true);
    directoryInput.click();
    directoryInput.addEventListener("change", handleFileSelect, false);
  };

  const handleFileSelect = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const fileList = event.target.files;
    const pngFiles = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    setFileList(pngFiles);
  };

  const handleFileConversion = () => {
    const base64Data = base64;
    // const img = new Image();
    const imgSrc = `${base64Data}`;
    const basetoimgconverted = document.createElement('a');
    basetoimgconverted.href = imgSrc;
    basetoimgconverted.download = 'image.jpeg';
    basetoimgconverted.click();
  };

 

  const handleMouseUp = (event) => {
    if (draw) {
      if (
        coord[0] < event.nativeEvent.offsetX &&
        coord[1] < event.nativeEvent.offsetY
      ) {
        let coordinates1 = [
          event.nativeEvent.offsetX,
          event.nativeEvent.offsetY,
        ];
        setCoord1(coordinates1);
      } else if (
        coord[0] > event.nativeEvent.offsetX &&
        coord[1] > event.nativeEvent.offsetY
      ) {
        let coordinates1 = [coord[0], coord[1]];
        setCoord1(coordinates1);
        setCoord([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
      } else if (coord[0] > event.nativeEvent.offsetX) {
        setCoord1([coord[0], event.nativeEvent.offsetY]);
        setCoord([event.nativeEvent.offsetX, coord[1]]);
      } else if (coord[1] > event.nativeEvent.offsetY) {
        setCoord1([event.nativeEvent.offsetX, coord[1]]);
        setCoord([coord[0], event.nativeEvent.offsetY]);
      }
      setIsOpen(true);
    }
    setVisible(false);
    setHeight1(null);
    setWidth1(null);
    if (edit) {
      if (edit1) {
        setEdit1(false);

        elements1.splice(editingIndex, 1, <rect
          className="rectangle"
          x={imgRefC[0] - editCoord[0]}
          y={imgRefC[1] - editCoord[1]}
          width={editData[1]}
          height={editData[0]}
        />);

        elements.splice(editingIndex, 1, <rect
          x={imgRefC[0] - editCoord[0] - 4}
          y={imgRefC[1] - editCoord[1] - 4}
          width="8"
          height="8"
          fill="lightgreen"
        />);
      
        elements2.splice(editingIndex, 1, <rect
          x={imgRefC[0] - editCoord[0] + editData[1] - 4}
          y={imgRefC[1] - editCoord[1] + editData[0] - 4}
          width="8"
          height="8"
          fill="lightblue"
        />);
      }
      if (edit2) {
        setEdit2(false);

        elements1.splice(editingIndex, 1, <rect
          className="rectangle"
          x={editCoord2[0]}
          y={editCoord2[1]}
          width={imgRefC[0] - editCoord2[0]}
          height={imgRefC[1] - editCoord2[1]}
        />);

        elements.splice(editingIndex, 1, <rect
          x={editCoord2[0] - 4}
          y={editCoord2[1] - 4}
          width="8"
          height="8"
          fill="lightgreen"
        />);

        elements2.splice(editingIndex, 1, <rect
          x={imgRefC[0] - 4}
          y={imgRefC[1] - 4}
          width="8"
          height="8"
          fill="lightblue"
        />);
      }
      if (edit3) {
        setEdit3(false);

        elements1.splice(editingIndex, 1, <rect
          className="rectangle"
          x={imgRefC[0]}
          y={imgRefC[1]}
          width={editCoord3[0] - imgRefC[0]}
          height={editCoord3[1] - imgRefC[1]}
        />);

        elements.splice(editingIndex, 1, <rect
          x={imgRefC[0] - 4}
          y={imgRefC[1] - 4}
          width="8"
          height="8"
          fill="lightgreen"
        />);

        elements2.splice(editingIndex, 1, <rect
          x={imgRefC[0] + (editCoord3[0] - imgRefC[0]) - 4}
          y={imgRefC[1] + (editCoord3[1] - imgRefC[1]) - 4}
          width="8"
          height="8"
          fill="lightblue"
        />);
      }
    }
  };

  const listItemfocus = (index) => {
    const lielement = document.getElementById(index);
    lielement.style.backgroundColor = "orange";
    lielement.style.border = "3px solid black";
    lielement.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
  };

  const listItemfocusout = (index) => {
    const lielementout = document.getElementById(index);
    lielementout.style.backgroundColor = "#0000004D";
    lielementout.style.border = "none";
    lielementout.style.transform = "none";
    lielementout.style.boxShadow = "none";
  };

  const handleRectDraw = () => {
    setDraw((current) => !current);
    setBtnClr((current) => !current);
    setEdit(false);
    setDel(false);
  };

  const handleEdit = () => {
    setEdit((current) => !current);
    setBtnClr((current) => !current);
    setDraw(false);
    setDel(false);
  };

  const handleDelete = () => {
    setDel((current) => !current);
    setBtnClr((current) => !current);
    setDraw(false);
    setEdit(false);
  };

  const handleZoom = () => {
    setZoom((current) => !current);
  };

  const handleMouseDown1 = (index, event) => {
    if (edit) {
      setEditCoord3([
        elements1[index].props.width + elements1[index].props.x,
        elements1[index].props.height + elements1[index].props.y,
      ]);
      setEditData3([
        elements1[index].props.x - event.nativeEvent.offsetX,
        elements1[index].props.y - event.nativeEvent.offsetY,
      ]);
      setEdit3(true);
    }
  };

  const handleMouseDown2 = (index, event) => {
    if (edit) {
      console.log("before delete:", index);
      setEditCoord([
        event.nativeEvent.offsetX - elements1[index].props.x,
        event.nativeEvent.offsetY - elements1[index].props.y,
      ]);
      setEdit1(true);
      setEditData([
        elements1[index].props.height,
        elements1[index].props.width,
      ]);
      console.log("after delete:", index);
    }
    if (del) {
      setDialog({
        message: "Are you sure you want to" + " " + `${index}` + " delete?",
        isLoading: true,
      });
      setDelIndex(index);
    }
  };

  

  const handleMouseDown3 = (index, event) => {
    if (edit) {
      setEditCoord2([elements1[index].props.x, elements1[index].props.y]);
      setEdit2(true);
    }
  };

  const handleData = () => {
    console.log(listItems2);
  };

  const handleData1 = (index) => {
    if (edit) {
      setIndex1(index);
    }
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  const getBase64 = () => {
    const reader = new FileReader();
    const file = fileList[imgIndex];
    reader.readAsDataURL(file);
    reader.onload = (() => {
      setBase64(reader.result);
      // console.log(fileList.name, " ", "Base64");
    });
    reader.onerror = (error) => console.log("Error", error);
  };

  var mainobj = listItems2.map((subarray) => (
    {
      "label": subarray[0],
      "class": subarray[8],
      "shape": "rectangle",
      "points": [{
        "x": subarray[5],
        "y": subarray[7],
        "height": subarray[1],
        "width": subarray[3]
      }]
    })
  );

  const obj4 = {
    image_name: imgName,
    bounding_boxes: Object.values(mainobj),
    image_data: base64,
    TimeStamp: new Date().getTime(),
  };

  

  const handleJSONExport = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(obj4)
    )}`;
    const jsondownload = document.createElement("a");
    jsondownload.href = jsonString;
    jsondownload.download = "para.json";
    jsondownload.click();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
  };

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown(false);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown(false);
    setShowDropdown1(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
  };
  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
    setShowDropdown(false);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown4(false);
  };
  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
    setShowDropdown(false);
    setShowDropdown1(false);
    setShowDropdown3(false);
    setShowDropdown2(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
      setShowDropdown1(false);
      setShowDropdown2(false);
      setShowDropdown3(false);
      setShowDropdown4(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (fileList.length > 0) {
      setImgIndex(0);
      setImgSource1(URL.createObjectURL(fileList[0]));
      setImgName(fileList[imgIndex].name.toString());
      setElementsMaster(Array(fileList.length - 1).fill([]));
      setElementsMaster1(Array(fileList.length - 1).fill([]));
      setElementsMaster2(Array(fileList.length - 1).fill([]));
      setListDataMaster(Array(fileList.length - 1).fill([]));
    }
  }, [fileList]);

  useEffect(() => {
    if (dialog1) {
      delete elements[delIndex];
      delete elements1[delIndex];
      delete elements2[delIndex];
      delete data4[delIndex];
    }
  }, [delIndex1]);

  useEffect(() => {
    if (visible === true) {
      if (imgRefC[1] > coord[1] && imgRefC[0] > coord[0]) {
        let h1 = imgRefC[1] - coord[1];
        let w1 = imgRefC[0] - coord[0];
        setCoord2([coord[0], coord[1]]);
        setHeight1(h1);
        setWidth1(w1);
      } else if (imgRefC[1] < coord[1] && imgRefC[0] < coord[0]) {
        let h1 = coord[1] - imgRefC[1];
        let w1 = coord[0] - imgRefC[0];
        setCoord2([imgRefC[0], imgRefC[1]]);
        setHeight1(h1);
        setWidth1(w1);
      } else if (imgRefC[1] < coord[1] && imgRefC[0] > coord[0]) {
        let h1 = coord[1] - imgRefC[1];
        let w1 = imgRefC[0] - coord[0];
        setCoord2([coord[0], imgRefC[1]]);
        setHeight1(h1);
        setWidth1(w1);
      } else if (imgRefC[0] < coord[0] && imgRefC[1] > coord[1]) {
        let h1 = imgRefC[1] - coord[1];
        let w1 = coord[0] - imgRefC[0];
        setCoord2([imgRefC[0], coord[1]]);
        setHeight1(h1);
        setWidth1(w1);
      }
    }
  }, [imgRefC]);

  useEffect(() => {
    if (draw) {
      setElements1([
        ...elements1,
        <rect
          className="rectangle"
          x={coord[0]}
          y={coord[1]}
          width={width}
          height={height}
        />,
      ]);
      setElements2([
        ...elements2,
        <rect
          x={coord1[0] - 4}
          y={coord1[1] - 4}
          width="8"
          height="8"
          fill="lightblue"
        />,
      ]);
    }
  }, [center]);

  useEffect(() => {
    if (draw) {
      let h = coord1[1] - coord[1];
      let w = coord1[0] - coord[0];
      let c1 = coord[0] + w / 2;
      let c2 = coord[1] + h / 2;
      setHeight(h);
      setWidth(w);
      setCenter([c1, c2]);
    }
  }, [coord1]);

  useEffect(() => {
    if (draw) {
      setElements([
        ...elements,
        <rect
          x={coord[0] - 4}
          y={coord[1] - 4}
          width="8"
          height="8"
          fill="lightgreen"
        />,
      ]);
    }
  }, [coord1]);

  useEffect(() => {
    if (draw) {
      setDrawBtnClr({
        color: "#E5E4E2",
        backgroundColor: "#0F2027",
      });
      setDelBtnClr({});
      setEditBtnClr({});
    } else if (edit) {
      setDrawBtnClr({});
      setEditBtnClr({
        color: "#E5E4E2",
        backgroundColor: "#0F2027",
      });
      setDelBtnClr({});
    } else if (del) {
      setDrawBtnClr({});
      setEditBtnClr({});
      setDelBtnClr({
        color: "#E5E4E2",
        backgroundColor: "#0F2027",
      });

    } else {
      setDrawBtnClr({});
      setDelBtnClr({});
      setEditBtnClr({});
    }
  }, [btnClr]);

  useEffect(() => {
    zoom ? setZoomBtnClr({
      color: "white",
      backgroundColor: "#0F2027"
    }) : setZoomBtnClr({});
  }, [zoom]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 39) {
        nxtImgBtn.current.click();
      } else if (event.keyCode === 37) {
        prevImgBtn.current.click();
      } else if (event.ctrlKey && (event.key === "i" || event.key === "I")) {
        event.preventDefault();
        addDataBtn.current.click();
      } else if (event.shiftKey && event.key === "ArrowUp") {
        event.preventDefault();
        sixthImgBtn.current.click();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (zoom) {
      document.getElementById("svgwheel").addEventListener("wheel", handleZoomInOut);
    } else if (!zoom) {
      setZoomLevel(1);
    }
    function handleZoomInOut(event) {
      event.preventDefault();
      deltaY = event.deltaY;
      setCursorPosition({ x: event.clientX, y: event.clientY });
      if (deltaY < 0) {
        if ((zoomDelta > 0 || zoomDelta === 0) && (zoomDelta < 50)) {
          zoomDelta = zoomDelta + 0.5;
        }
      } else if (deltaY > 0) {
        if ((zoomDelta === 50 || zoomDelta < 50) && (zoomDelta > 0)) {
          zoomDelta = zoomDelta - 0.5;
        }
      }
      const newZoomLevel = (zoomLevel + zoomDelta);
      setZoomLevel(newZoomLevel);
    }
    return () => {
      document.getElementById("svgwheel").removeEventListener("wheel", handleZoomInOut);
    };
  }, [zoom]);

  return (
    <div className="main-div">
      <div className="header">
        <div className="head_left">
          <img src={Logo} alt="LOGO" height="50px" className="logo-Image" />
          <p className="headerTitle">
            <GradientText colors={["#c6ffdd", "#fbd786", "#f7797d"]}>
              <div className="O">OBJECT</div>
              <div className="D">DETECTION</div>
            </GradientText>
          </p>

          <nav className="nav-bar" ref={dropdownRef}>
            <ul className="nav-ul">
              <li>
                <a href="#file" onClick={toggleDropdown1}>
                  File
                </a>
                {showDropdown1 && (
                  <ul className="dropdown">
                    <li>
                      <a href="#openfile" className="Open-file">Open File</a>
                    </li>
                    <li onClick={handleFileConversion}>
                      <a className="Open-file">
                        Import File
                      </a>
                    </li>
                    <li onMouseDown={getBase64()} onClick={handleJSONExport}>
                      <a className="Open-file">Export Json</a>
                    </li>
                    <li>
                      <a href="#save" className="Save">Save</a>
                    </li>
                    <li>
                      <a href="#saveas" className="Save-as">Save As</a>
                    </li>
                    <li>
                      <a href="#addlocalfile" className="Add-local-file">Add Local File</a>
                    </li>
                    <li>
                      <a href="#exit" className="Exit">Exit</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#edit" onClick={toggleDropdown2}>
                  Edit
                </a>
                {showDropdown2 && (
                  <ul className="dropdown">
                    <li>
                      <a href="#undo">Undo</a>
                    </li>
                    <li>
                      <a href="#redo">Redo</a>
                    </li>
                    <li>
                      <a href="#delete">Delete</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#tool" onClick={toggleDropdown}>
                  Tool
                </a>
                {showDropdown && (
                  <ul className="dropdown">
                    <li>
                      <a href="#jsonfile">JSON File</a>
                    </li>
                    <li>
                      <a href="#csvfile">CSV File</a>
                    </li>
                    <li>
                      <a href="#download">Download File</a>
                    </li>
                    <li>
                      <a href="#preview">Preview File</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#view" onClick={toggleDropdown3}>
                  View
                </a>
                {showDropdown3 && (
                  <ul className="dropdown">
                    <li>
                      <a href="#zoomin">Zoom In</a>
                    </li>
                    <li>
                      <a href="#zoomout">Zoom Out</a>
                    </li>
                    <li>
                      <a href="#reset">Reset</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#help" onClick={toggleDropdown4}>
                  Help
                </a>
                {showDropdown4 && (
                  <ul className="dropdown">
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#gettingstarted">Getting Started</a>
                    </li>
                    <li>
                      <a href="#annotationpage">Annotation Page</a>
                    </li>
                    <li>
                      <a href="#documentation">Documentation</a>
                    </li>
                  </ul>
                )}
              </li>
              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="head_right">
          <div class="header_right_btn">
            <button class="header_right_btns rtts">
              RETURN TO TASK SELECTION
            </button>
            <button class="header_right_btns ft">FINISH TASK</button>
          </div>
          <button className="btn_logout" onClick={handleLogout}>
            LOGOUT{" "}
            <p>
              {" "}
              <FiLogOut />{" "}
            </p>{" "}
          </button>
        </div>
      </div >
      <div className="setion-container">
        <div className="tool-ul">
          <IconContext.Provider value={{ size: "24px", color: "white" }}>
            <Tooltip title="Click to show more options" placement="right">
              <div
                ref={addDataBtn}
                className="tool-button upload-button"
                onClick={handleFolderSelect}
              >
                <h4 className="sidebarBtns">
                  <CiImport className="sidebarIcons" />
                  Import Data
                </h4>
              </div>
            </Tooltip>
            <div className="sub-menu">
              <button className="adddata_btn">
                <h5>Add from local</h5>
              </button>
              <button className="adddata_btn">
                <h5>Add from cloud</h5>
              </button>
            </div>

            <Tooltip title="Click to activate Rectangle mode" placement="right">
              <div
                onClick={handleRectDraw}
                className="tool-button"
                style={drawBtnClr}
              >
                <h4 className="sidebarBtns">
                  <MdBorderStyle className="sidebarIcons" />
                  Rectangle
                </h4>
              </div>
            </Tooltip>
            <Tooltip title="Click to activate edit mode" placement="right">
              <div
                onClick={handleEdit}
                className="tool-button"
                style={editBtnClr}
              >
                <h4 className="sidebarBtns">
                  <CiEdit className="sidebarIcons" />
                  Edit
                </h4>
              </div>
            </Tooltip>
            <Tooltip title="Click to activate delete mode" placement="right">
              <div
                onClick={handleDelete}
                className="tool-button"
                style={delBtnClr}
              >
                <h4 className="sidebarBtns">
                  <AiOutlineDelete className="sidebarIcons" />
                  Delete
                </h4>
              </div>
            </Tooltip>
            <Tooltip title="Click to activate zoom mode" placement="right">
              <div
                onClick={handleZoom}
                className="tool-button"
                style={ZoomBtnClr}
              >
                <h4 className="sidebarBtns">
                  <TbZoomCode className="sidebarIcons" />
                  Zoom
                </h4>
              </div>
            </Tooltip>
          

          </IconContext.Provider>
        </div>
        <div className="canvas-div-parent" style={{ width: '1280', height: '720' }}>
          {dialog.isLoading && (
            <Dialog message={dialog.message} onDialog={handleDelete1} />
          )}
          {isOpen && (
            <Dialog1
              pageX={coord1[1] + width}
              pageY={coord1[0] + height}
              dialogC1={handleDialog1C}
              dialogOK1={handleDialog1OK}
              onBinsChange={handleBinsChange}
              onClass1Change={handleClass1Change}
              onD1heightChange={handleD1heightChange}
              onCheckedChange={handleD1CheckedChange}
            />
          )}
          <div
            className="canvas-div"
            id="svgwheel"
            style={{
              width: "1280",
              height: "720",
              transform: `scale(${zoomLevel})`,
              transformOrigin: `${cursorPosition.x}px ${cursorPosition.y}px`,
              imageRendering: "pixelated"
            }}
          >
            <svg
              onMouseDown={(event) => handleMouseDown(event)}
              onMouseUp={(event) => handleMouseUp(event)}
              onMouseMove={(event) => handleMouseMove(event)}
              className="svg-container"
            >
              <foreignObject
                width="1280"
                height="720"
                style={{
                  // pointerEvents: "none",
                }}
              >
                <img
                  className="canvas-image"
                  src={imgSource1}
                  alt={imgSource1.name}
                  style={{
                    pointerEvents: 'none'
                  }}
                />

              </foreignObject>
              {visible && (
                <foreignObject
                  className="imgref"
                  x={coord2[0]}
                  y={coord2[1]}
                  height={height1}
                  width={width1}
                  style={{ pointerEvents: "none" }}
                >
                  <div style={{ pointerEvents: "none" }}></div>
                </foreignObject>
              )}
              {edit1 && (
                <foreignObject
                  className="imgref"
                  x={imgRefC[0] - editCoord[0]}
                  y={imgRefC[1] - editCoord[1]}
                  height={editData[0]}
                  width={editData[1]}
                >
                  <div style={{ pointerEvents: "none" }}></div>
                </foreignObject>
              )}
              {edit2 && (
                <foreignObject
                  className="imgref"
                  x={editCoord2[0]}
                  y={editCoord2[1]}
                  height={imgRefC[1] - editCoord2[1]}
                  width={imgRefC[0] - editCoord2[0]}
                >
                  <div style={{ pointerEvents: "none" }}></div>
                </foreignObject>
              )}
              {edit3 && (
                <foreignObject
                  className="imgref"
                  x={imgRefC[0]}
                  y={imgRefC[1]}
                  height={editCoord3[1] - imgRefC[1]}
                  width={editCoord3[0] - imgRefC[0]}
                >
                  <div style={{ pointerEvents: "none" }}></div>
                </foreignObject>
              )}
              {elements.map((element, index) => {
                return (
                  <g
                    key={index}
                    onMouseDown={(event) => {
                      setEditingIndex(index);
                      handleMouseDown1(index, event)
                    }}
                  >
                    {element}
                  </g>
                );
              })}
              {elements1.map((element, index) => {
                return (
                  <g
                    key={index}
                    onMouseDown={(event) => {
                      setEditingIndex(index);
                      handleMouseDown2(index, event)
                    }}
                    onMouseOver={(event) => listItemfocus(index, event)}
                    onMouseOut={(event) => listItemfocusout(index, event)}
                  >
                    {element}
                  </g>
                );
              })}
              {elements2.map((element, index) => {
                return (
                  <g
                    key={index}
                    onMouseDown={(event) => {
                      setEditingIndex(index);
                      handleMouseDown3(index, event)
                    }}
                  >
                    {element}
                  </g>
                );
              })}
            </svg>

           
          </div>
        </div>
      </div>
      <div className="imagechange">
        <button className="undoBtn"><ImUndo2 /></button>
        <button className="redoBtn"><ImRedo2 /></button>
        <button
          ref={prevImgBtn}
          onClick={handlePreviousImage}
          className="previousimage"
        >
          Previous Image
        </button>
        <button
          ref={nxtImgBtn}
          onClick={handleNextImage}
          className="nextimage"
        >
          Next Image
        </button>
        <div className="label-div">
          <div className="label-div1 label" style={{ color: "white" }}>
            Label List
            <ul
              style={{ color: "white", textAlign: "left" }}
              className="ul-label"
              id="listItems-labellist"
            >
              {listItems}
            </ul>
          </div>
         
          <div className="param_btn">
            <div className="t1">
              Object Classes
              <input
                className='search'
                type="text"
                placeholder="Search object"
                value={searchTerm}
                onChange={handleSearch}
              />
              <br />  <br />
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Object</th>
                    <th>Color</th>
                    <th>View</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>{generateColorPalette()}</tbody>
              </table>
            </div>
          </div>
          <div className="label-div1 label" style={{ color: "white" }}>
            Image List
            <ul
              style={{ color: "white", textAlign: "left" }}
              className="ul-label"
            > 
              {" "}
              {fileList.map((file) => (
                <div key={file.name}> {file.name} </div>
              ))}{" "}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Canvas1;
