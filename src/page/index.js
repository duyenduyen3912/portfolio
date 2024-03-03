import "./style.css";
import { Image, Tabs, TabsProps } from "antd";
import {
  GiftOutlined,
  PhoneOutlined,
  GithubOutlined,
  MailOutlined,
  HomeOutlined,
  FieldTimeOutlined,
  SolutionOutlined,
  IdcardOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "animate.css";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
function Page() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const onChange1 = (visible) => {
    setIsVisible1(visible);
  };
  const onChange2 = (visible) => {
    setIsVisible2(visible);
  };
  const onChange3 = (visible) => {
    setIsVisible3(visible);
  };
  const onChange4 = (visible) => {
    setIsVisible4(visible);
  };
  const onChange5 = (visible) => {
    setIsVisible5(visible);
  };
  const onChange6 = (visible) => {
    setIsVisible6(visible);
  };
  const onChange7 = (visible) => {
    setIsVisible7(visible);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByClassName("header-item-link");
    const links = Array.from(elements);
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        var id = link.getAttribute("href");
        var targetElement = document.querySelector(id);

        if (targetElement) {
          var targetOffset = targetElement.offsetTop;
          window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
          });
        }
      });
    });
  });
  const items = [
    {
      key: "1",
      label: <span className="tab-heading">Dự án 1</span>,
      children: (
        <ReactVisibilitySensor onChange={onChange4} partialVisibility>
          <div className="pj-1">
            <div className="pj-1-img">
              <Image
                src={require("../assets/pj-1.png")}
                preview={false}
                className={
                  isVisible4
                    ? "pj-img animate__animated animate__delay-1s animate__zoomIn"
                    : "pj-img"
                }
                style={{ transform: "rotate(-4deg)", marginBottom: "50px" }}
              />
              <Image
                src={require("../assets/pj-2.png")}
                preview={false}
                className={
                  isVisible4
                    ? "pj-img animate__animated animate__delay-1s animate__zoomIn"
                    : "pj-img"
                }
              />
            </div>
            <div className="pj-detail-wrap">
              <div className="pj-detail-img-wrap">
                <Image
                  src={require("../assets/pj-3.png")}
                  preview={false}
                  className={
                    isVisible4
                      ? "pj-detail-img animate__animated animate__delay-1s animate__zoomIn"
                      : "pj-detail-img"
                  }
                />
                <div
                  className={
                    isVisible4
                      ? "pj-text animate__animated animate__delay-1s animate__zoomIn"
                      : "pj-text"
                  }
                >
                  <div className="pj-text-title">GIỚI THIỆU CHUNG</div>
                  <div className="pj-text-des">
                    Dự án Fooce là một trang web bán đồ ăn và đồ uống. Với dịch
                    vụ đặt hàng trực tuyến và thiết kế hiện đại, Fooce đáp ứng
                    nhu cầu của người dùng với dịch vụ đặt hàng nhanh chóng,
                    tiện lợi.
                  </div>
                  <Image
                    src={require("../assets/x.png")}
                    preview={false}
                    className={
                      isVisible4
                        ? "x-group animate__animated animate__delay-1s animate__zoomIn"
                        : "x-group"
                    }
                  />
                </div>
              </div>
              <div
                className={
                  isVisible4
                    ? "pj-detail animate__animated animate__delay-1s animate__fadeInRight"
                    : "pj-detail"
                }
              >
                <div className="pj-number">01</div>
                <div style={{ paddingRight: "50px", paddingBottom: "30px" }}>
                  <div className="title-infor">FOOCE</div>
                  <div className="pj-description">
                    Dự án Fooce là một trang web bán đồ ăn và đồ uống, được phát
                    triển bằng Next.js cho phần Frontend và PHP cho phần
                    Backend. Fooce cung cấp cho người dùng tính năng xem danh
                    dách sản phẩm, xem chi tiết sản phẩm, thêm hàng vào giỏ,
                    chỉnh sửa giỏ hàng và đặt hàng.
                  </div>
                  <div className="pj-wrap">
                    <div className="pj-title">Github</div>
                    <a
                      href="https://github.com/duyenduyen3912/fooce"
                      className="pj-description-link"
                    >
                      https://github.com/duyenduyen3912/fooce
                    </a>
                  </div>
                  <div className="pj-wrap">
                    <div className="pj-title">Technology</div>
                    <div className="pj-description-link">NextJS, PHP</div>
                  </div>
                  <div className="pj-wrap">
                    <div className="pj-title">Demo</div>
                    <a
                      href="https://fooce.vercel.app"
                      className="pj-description-link"
                    >
                      https://fooce.vercel.app <br />
                      {" (username: test, pass: 012345678)"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactVisibilitySensor>
      ),
    },
    {
      key: "2",
      label: <span className="tab-heading">Dự án 2</span>,
      children: (
        <ReactVisibilitySensor onChange={onChange5} partialVisibility>
          <div className="pj-2-wrap">
            <div className="pj-2-left">
              <div className="pj-2-left-img-wrap">
                <Image
                  src={require("../assets/x.png")}
                  preview={false}
                  className={
                    isVisible5
                      ? "animate__animated animate__fadeInTopRight pj-2-left-img"
                      : "pj-2-left-img"
                  }
                />
                <Image
                  src={require("../assets/pj2-2.png")}
                  preview={false}
                  className={
                    isVisible5
                      ? "animate__animated animate__fadeInTopRight pj-2-img"
                      : "pj-2-img"
                  }
                />
                <Image
                  src={require("../assets/x.png")}
                  preview={false}
                  className={
                    isVisible5
                      ? "animate__animated animate__fadeInTopRight pj-2-left-img"
                      : "pj-2-left-img"
                  }
                />
              </div>
              <div
                className={
                  isVisible5
                    ? "animate__animated animate__fadeInTopRight pj-2-left-text"
                    : "pj-2-left-text"
                }
              >
                <div className="pj-2-left-title">NAGOYA</div>
                <div className="pj-2-item">
                  <div className="pj-2-title">Github</div>
                  <a
                    href="https://github.com/duyenduyen3912/Nagoya-App.git"
                    className="pj-2-description-link"
                  >
                    https://github.com/duyenduyen3912/Nagoya-App.git
                  </a>
                </div>
                <div className="pj-2-item">
                  <div className="pj-2-title">Technology</div>
                  <div className="pj-2-description-link">React Native</div>
                </div>
              </div>
            </div>
            <div className="pj-2-right">
              <Image
                src={require("../assets/pj-2-2.png")}
                preview={false}
                className={
                  isVisible5
                    ? "animate__animated animate__fadeInTopRight pj-2-right-img-1"
                    : "pj-2-right-img-1"
                }
              />
              <br />
              <Image
                src={require("../assets/pj2-3.png")}
                preview={false}
                className={
                  isVisible5
                    ? "pj-2-right-img-2 animate__animated animate__fadeInTopRight "
                    : "pj-2-right-img-2"
                }
              />
              <div
                className={
                  isVisible5
                    ? "animate__animated animate__fadeInTopRight pj-2-text"
                    : "pj-2-text"
                }
              >
                Nagoya là một ứng dụng đọc truyện, đăng tải truyện dành cho độc
                giả các các tác giả. Nagoya cung cấp cho người dùng trải nghiệm
                thú vị với các tính năng đọc truyện, đăng truyện, lưu lại những
                quyển truyện bạn yêu thích với thư viện truyện cá nhân.
              </div>
            </div>
          </div>
        </ReactVisibilitySensor>
      ),
    },
    {
      key: "3",
      label: <span className="tab-heading">Dự án 3</span>,
      children: (
        <ReactVisibilitySensor onChange={onChange6} partialVisibility>
          <div
            className={
              isVisible6
                ? "animate__animated  animate__fadeIn pj-3-wrap"
                : "pj-3-wrap"
            }
          >
            <div className="pj-3-img">
              <Image
                src={require("../assets/pj3.png")}
                preview={false}
                className="pj3"
              />
              <Image
                src={require("../assets/x-2.png")}
                preview={false}
                className="pj-3-ximg"
              />
            </div>

            <div className={"pj-3-des"}>
              <div className="pj-3-title">CHIPPISOFT</div>
              <div className="pj-3-des-text">
                Chippisoft là một dự án được xây dựng bằng ReactJS, cunng cấp
                cho người dùng dịch vụ quản trị cho trang web bán phần mềm. Dự
                án bao gồm quản lý các sản phẩm như thêm, xoá, sửa sản phẩm,
                thành viên, thống kê doanh thu bán hàng hay gửi thông báo cho
                người dùng,...
              </div>
              <div className="pj-3-text">
                <div className="pj-3-item">
                  <div className="pj-3-item-title">Github</div>
                  <a
                    href="https://github.com/duyenduyen3912/software-management-admin"
                    className="pj-3-title-link"
                  >
                    https://github.com/duyenduyen3912/software-management-admin
                  </a>
                </div>
                <div className="pj-3-item">
                  <div className="pj-3-item-title">Technology</div>
                  <div className="pj-3-title-link">ReactJS</div>
                </div>
                <div className="pj-3-item">
                  <div className="pj-3-item-title">Demo</div>
                  <a
                    href="https://admin.chippisoft.com/"
                    className="pj-3-title-link"
                  >
                    https://admin.chippisoft.com/ <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ReactVisibilitySensor>
      ),
    },
  ];
  return (
    <div className="wrap">
      <div className="header">
        <div className="name">
          <a className="header-item-link" href="#home">
            Duyên
          </a>
        </div>
        <ul className="header-list">
          <li className="header-item">
            <a className="header-item-link" href="#introduce">
              Giới thiệu
            </a>
          </li>
          <li className="header-item">
            <a className="header-item-link" href="#skill">
              Kỹ năng
            </a>
          </li>
          <li className="header-item">
            <a className="header-item-link" href="#exp">
              Kinh nghiệm
            </a>
          </li>
          <li className="header-item">
            <a className="header-item-link" href="#project">
              Dự án
            </a>
          </li>
          <li className="header-item">
            <a className="header-item-link" href="#contact">
              Liên hệ
            </a>
          </li>
          <li className="header-item">
            <i className="fa-solid fa-moon"></i>
          </li>
        </ul>
      </div>
      <ReactVisibilitySensor onChange={onChange1} partialVisibility>
        <div className="home" id="home">
          <Image
            className={
              isVisible1
                ? `image animate__animated animate__delay-1s animate__bounceInLeft`
                : `image`
            }
            src={require("../assets/duyen.png")}
            preview={false}
          />
          <div
            className={
              isVisible1
                ? `introduce animate__animated animate__delay-1s animate__bounceInUp`
                : "introduce"
            }
          >
            <div className="name-dev">NGÔ THỊ DUYÊN</div>
            <div className="intro-infor">Frontend Developer</div>
            <div className="detail">
              Xin chào! Tôi là một lập trình viên Frontend có kinh nghiệm trong
              việc phát triển giao diện người dùng cho cả ứng dụng web và di
              động. Tôi thành thạo việc chuyển đổi giao diện từ Figma, PSD sang
              mã HTML, CSS và JavaScript. Tôi cũng có khả năng sử dụng framework
              ReactJS để xây dựng các ứng dụng Frontend.
            </div>
          </div>
        </div>
      </ReactVisibilitySensor>

      <div style={{ paddingTop: "90px" }} id="introduce">
        <div className="infor-wrap">
          <Image
            className="image-intro"
            preview={false}
            src={require("../assets/1.png")}
          />
          <ReactVisibilitySensor onChange={onChange2} partialVisibility>
            <div className="infor">
              <div className="general-infor">
                <div className="title-infor">THÔNG TIN CÁ NHÂN</div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <GiftOutlined />
                  <span className="infor-icon">08/03/2001</span>
                </div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <PhoneOutlined />
                  <span className="infor-icon">035 394 9741</span>
                </div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <MailOutlined />
                  <span className="infor-icon">duyenduyen8301@gmail.com</span>
                </div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <GithubOutlined />

                  <a
                    href="https://github.com/duyenduyen3912"
                    className="infor-icon"
                  >
                    https://github.com/duyenduyen3912
                  </a>
                </div>
              </div>
              <div className="education">
                <div className="title-infor">HỌC VẤN</div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <HomeOutlined />
                  <span className="infor-icon">
                    POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY VIETNAM
                  </span>
                </div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <SolutionOutlined />
                  <span className="infor-icon">
                    Multimedia technology and design
                  </span>
                </div>
                <div
                  className={
                    isVisible2
                      ? "my-infor animate__animated animate__delay-1s animate__fadeInDown"
                      : "my-infor"
                  }
                >
                  <FieldTimeOutlined />
                  <span className="infor-icon">09.2019 - 2024</span>
                </div>
              </div>
            </div>
          </ReactVisibilitySensor>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }} id="skill">
        <div className="skill-wrap">
          <div className="skill-title-bg">
            <div className="skill-title">KỸ NĂNG</div>
          </div>
          <div className="my-skill">
            <div className="skill">
              <Image
                src={require("../assets/htmlcss.png")}
                preview={false}
                className="skill-img"
              />
              <div style={{ transform: "translateY(-40px)" }}>
                <div className="skill-name animate__animated animate__slow animate__infinite animate__swing">
                  HTML/CSS
                </div>
              </div>
            </div>

            <div className="skill">
              <Image
                src={require("../assets/js.png")}
                preview={false}
                className="skill-img"
              />
              <div style={{ transform: "translateY(-40px)" }}>
                <div className="skill-name animate__animated animate__slow animate__infinite animate__swing">
                  JavaScript
                </div>
              </div>
            </div>
            <div className="skill">
              <Image
                src={require("../assets/ts.png")}
                preview={false}
                className="skill-img"
              />
              <div style={{ transform: "translateY(-40px)" }}>
                <div className="skill-name animate__animated animate__slow animate__infinite animate__swing">
                  TypeScript
                </div>
              </div>
            </div>
            <div className="skill">
              <Image
                src={require("../assets/java.png")}
                preview={false}
                className="skill-img"
              />
              <div style={{ transform: "translateY(-40px)" }}>
                <div className="skill-name animate__animated animate__slow animate__infinite animate__swing">
                  Java
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "70px" }} id="exp">
        <ReactVisibilitySensor onChange={onChange3} partialVisibility>
          <div className={"experience-wrap"}>
            <Image
              src={require("../assets/border.png")}
              preview={false}
              className={
                isVisible3
                  ? " animate__animated animate__delay-1s animate__zoomIn"
                  : ""
              }
            />
            <div
              className={
                isVisible3
                  ? "experience animate__animated animate__delay-1s animate__zoomIn animate__delay-0.5s"
                  : "experience"
              }
            >
              <div className="experience-title">KINH NGHIỆM</div>
              <div className="experience-detail">
                <div className="my-infor">
                  <HomeOutlined />
                  <span className="infor-icon">TINASOFT</span>
                </div>
                <div className="my-infor">
                  <IdcardOutlined />
                  <span className="infor-icon">
                    Development of Frontend ReactJS/NextJS
                  </span>
                </div>
                <div className="my-infor">
                  <FieldTimeOutlined />
                  <span className="infor-icon">06.2023 - 12.2023</span>
                </div>
              </div>
              <Image
                src={require("../assets/flower.png")}
                preview={false}
                className="flower"
              />
            </div>
          </div>
        </ReactVisibilitySensor>
      </div>
      <div style={{ paddingTop: "70px" }} id="project">
        <div className="project-wrap">
          <Tabs defaultActiveKey="1" items={items} className="ant-tabs" />
        </div>
      </div>
      <div style={{ paddingTop: "70px" }} id="contact">
        <ReactVisibilitySensor onChange={onChange7} partialVisibility>
          <div
            className={
              isVisible7
                ? "contact animate__animated animate__delay-1s animate__pulse"
                : "contact"
            }
          >
            <Image
              src={require("../assets/contact.png")}
              preview={false}
              className="contact-img"
            />
            <div className="contact-infor">
              <div className="contact-title">LIÊN HỆ</div>
              <div className="my-infor">
                <MailOutlined />
                <span className="infor-icon">duyenduyen8301@gmail.com</span>
              </div>
              <div className="my-infor">
                <PhoneOutlined />
                <span className="infor-icon">035 394 9741</span>
              </div>
              <div className="my-infor">
                <FacebookOutlined />
                <a
                  href="https://www.facebook.com/corn.8.3/"
                  className="infor-icon"
                >
                  Duyên Duyên
                </a>
              </div>
              <div className="my-infor">
                <InstagramOutlined />
                <a
                  href="https://www.instagram.com/corn_._/"
                  className="infor-icon"
                >
                  corn_._
                </a>
              </div>
            </div>
          </div>
        </ReactVisibilitySensor>
      </div>
    </div>
  );
}

export default Page;
