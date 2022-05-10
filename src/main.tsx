import React from "react";
import ReactDOM from "react-dom/client";
import Renderer from "./Renderer";
import './styles.css';
const view: any = {
  key: "2:2",
  tagName: "div",
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: 480,
    backgroundImage:
      "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100% )",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  children: [
    {
      key: "8:3",
      tagName: "async",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        backgroundImage: "",
      },
      children: [
        {
          key: "2:3049",
          tagName: "div",
          style: {
            display: "flex",
            gap: 10,
            height: 96,
            backgroundImage: "",
          },
          children: [
            {
              key: "2:3050",
              tagName: "div",
              style: {
                display: "flex",
                flexDirection: "column",
                backgroundImage: "",
              },
              children: [
                {
                  key: "6:2",
                  tagName: "div",
                  style: {
                    display: "flex",
                    gap: 10,
                    height: 96,
                    width: 96,
                    backgroundImage: "",
                  },
                  children: [
                    {
                      key: "3:910",
                      tagName: "img",
                      dataset: {
                        src: "https://s3-alpha-sig.figma.com/img/1afb/4afb/4b637264dac1d543ba3ed1f76277aeb1?Expires=1653264000&Signature=M9UTjvZ28GSvVtHBVhV8n-mTd-sdQj-eLQvi6XPb1emdDE2GyzJ1YBDQyaK3AqhCPUaorsbylNROsvGdX6MPnMxZRtKWtI1OKaYKrFEHu5XXpjh09Py~G7ts6ml0FGLyy75rjbJE4JpW4azsNhjA6x~f0PUZJISXYW~cuj~xLY1igVx6AmjhkkLndobSmEQ9dLX-tRktyk-DHjuwiGNVPT5fbRcxi5uGGiudWulKpxruRdoY5ah8Vsv5eXxOT~NDZULsIeogbGqMQVPSVM13~nRG8b17aB6aiO6qqesw8j0sCzsl8YLVATwFlHG6sxnT4m3vjXhibSMZJcH9C4qKQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                        ref: "1afb4afb4b637264dac1d543ba3ed1f76277aeb1",
                      },
                      bind: "thumbnail",
                      offset: {
                        x: 0,
                        y: 0,
                        width: 96,
                        height: 96,
                      },
                      children: [],
                    },
                  ],
                  offset: {
                    x: 0,
                    y: 0,
                    width: 96,
                    height: 96,
                  },
                },
              ],
              offset: {
                x: 0,
                y: 0,
                width: 96,
                height: 96,
              },
            },
            {
              key: "2:3053",
              tagName: "div",
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 8,
                backgroundImage: "",
              },
              children: [
                {
                  key: "2:3054",
                  tagName: "div",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    backgroundImage: "",
                  },
                  children: [
                    {
                      key: "3:908",
                      tagName: "span",
                      textContent:
                        "KARRA (77까지)라운드버튼바람막이집업점퍼_KB...",
                      style: {
                        flexGrow: 1,
                        width: "100%",
                        color: "rgba(51, 51, 51, 1)",
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "22px",
                        textAlign: "left",
                      },
                      bind: "subject",
                      offset: {
                        x: 0,
                        y: 0,
                        width: 222,
                        height: 44,
                      },
                      children: [],
                    },
                  ],
                  offset: {
                    x: 0,
                    y: 0,
                    width: 222,
                    height: 44,
                  },
                },
                {
                  key: "2:3059",
                  tagName: "div",
                  style: {
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                    backgroundImage: "",
                  },
                  children: [
                    {
                      key: "3:916",
                      tagName: "span",
                      textContent: "32%",
                      style: {
                        color: "rgba(240, 97, 40, 1)",
                        fontWeight: 700,
                        fontSize: 18,
                        lineHeight: "22px",
                        textAlign: "left",
                      },
                      bind: "discount",
                      offset: {
                        x: 0,
                        y: 0,
                        width: 34,
                        height: 22,
                      },
                      children: [],
                    },
                    {
                      key: "3:912",
                      tagName: "div",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        backgroundImage: "",
                      },
                      children: [
                        {
                          key: "3:913",
                          tagName: "span",
                          textContent: "39,920",
                          style: {
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: 700,
                            fontSize: 18,
                            lineHeight: "22px",
                            textAlign: "left",
                          },
                          bind: "price",
                          offset: {
                            x: 0,
                            y: 0,
                            width: 53,
                            height: 22,
                          },
                          children: [],
                        },
                        {
                          key: "3:914",
                          tagName: "span",
                          textContent: "원",
                          style: {
                            color: "rgba(0, 0, 0, 1)",
                            fontWeight: 400,
                            fontSize: 18,
                            lineHeight: "22px",
                            textAlign: "left",
                          },
                          offset: {
                            x: 53,
                            y: 0,
                            width: 16,
                            height: 22,
                          },
                          children: [],
                        },
                      ],
                      offset: {
                        x: 38,
                        y: 0,
                        width: 69,
                        height: 22,
                      },
                    },
                  ],
                  offset: {
                    x: 0,
                    y: 52,
                    width: 107,
                    height: 22,
                  },
                },
              ],
              offset: {
                x: 106,
                y: 0,
                width: 222,
                height: 74,
              },
            },
          ],
          offset: {
            x: 0,
            y: 0,
            width: 328,
            height: 96,
          },
        },
        {
          key: "3:2189",
          tagName: "a",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            backgroundImage:
              "linear-gradient(0deg, rgba(240, 97, 40, 1) 0%, rgba(240, 97, 40, 1) 100% )",
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 11,
            paddingBottom: 11,
          },
          children: [
            {
              key: "3:2190",
              tagName: "span",
              textContent: "구매하기",
              style: {
                color: "rgba(255, 255, 255, 1)",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "22px",
                textAlign: "center",
              },
              offset: {
                x: 197,
                y: 11,
                width: 55,
                height: 22,
              },
              children: [],
            },
          ],
          classList: [],
          className: "",
          dataset: {},
          id: "buy",
          offset: {
            x: 0,
            y: 112,
            width: 448,
            height: 44,
          },
        },
      ],
      classList: [],
      className: "",
      dataset: {
        url: "/product/v1/products/{cpid}",
      },
      offset: {
        x: 16,
        y: 16,
        width: 448,
        height: 156,
      },
    },
  ],
  offset: {
    x: 0,
    y: 0,
    width: 480,
    height: 188,
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Renderer view={view} />
);
