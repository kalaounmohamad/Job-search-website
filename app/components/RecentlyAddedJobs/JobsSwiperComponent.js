"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import React from "react";

export default function JobsSwiperComponent() {
  const swiperData = [
    {
      title: "UI/UX Designer",
      company: "BMW",
      type: "Full Time",
      location: "New York, USA",

      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          className="w-16 mb-4"
          viewBox="0 -0.01 1013.718 1013.718"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="-1120.126"
            y1="2189.824"
            x2="-44.679"
            y2="1150.587"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#dff4ff" />
            <stop offset=".098" stop-color="#d6eaf5" />
            <stop offset=".268" stop-color="#bfd0d9" />
            <stop offset=".488" stop-color="#98a5ac" />
            <stop offset=".747" stop-color="#646b6e" />
            <stop offset="1" stop-color="#2b2b2b" />
          </linearGradient>
          <path
            d="M506.86 0C226.94 0 0 226.918 0 506.848c0 279.927 226.94 506.849 506.86 506.849 279.94 0 506.857-226.922 506.857-506.849C1013.719 226.918 786.802 0 506.86 0zm0 988.352c-265.939 0-481.495-215.573-481.495-481.504 0-265.927 215.556-481.512 481.495-481.512 265.938 0 481.511 215.584 481.511 481.512 0 265.93-215.573 481.504-481.511 481.504z"
            fill="url(#a)"
          />
          <path
            d="M992.004 506.848c0 267.914-217.228 485.134-485.144 485.134-267.919 0-485.123-217.22-485.123-485.134 0-267.929 217.204-485.133 485.123-485.133 267.916 0 485.144 217.204 485.144 485.133z"
            fill="#333"
          />
          <radialGradient
            id="b"
            cx="-1052.247"
            cy="2101.652"
            r="720.108"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset=".306" stop-color="#a8a8a8" />
            <stop offset=".646" stop-color="#4f4f4f" />
            <stop offset=".885" stop-color="#161616" />
            <stop offset="1" />
          </radialGradient>
          <path
            d="M988.371 506.848c0 265.931-215.573 481.504-481.511 481.504-265.939 0-481.495-215.573-481.495-481.504 0-265.927 215.556-481.512 481.495-481.512 265.938 0 481.511 215.585 481.511 481.512z"
            fill="url(#b)"
          />
          <linearGradient
            id="c"
            gradientUnits="userSpaceOnUse"
            x1="-818.029"
            y1="1409.977"
            x2="-133.081"
            y2="748.092"
            gradientTransform="matrix(-1 0 0 1 58.906 -545.52)"
          >
            <stop offset="0" stop-color="#dff4ff" />
            <stop offset=".086" stop-color="#d6eaf5" />
            <stop offset=".233" stop-color="#bed0d9" />
            <stop offset=".424" stop-color="#96a4ac" />
            <stop offset=".652" stop-color="#5f686d" />
            <stop offset=".907" stop-color="#1a1d1e" />
            <stop offset="1" />
          </linearGradient>
          <path
            d="M829.677 506.848c0 178.28-144.53 322.804-322.815 322.804-178.289 0-322.819-144.522-322.819-322.804 0-178.289 144.53-322.815 322.819-322.815 178.284-.001 322.815 144.527 322.815 322.815z"
            fill="url(#c)"
          />
          <path d="M519.791 175.308l33.533-88.877v88.877h25.469V48.021h-38.275l-34.814 91.136h.331l-34.812-91.136h-38.276v127.287h25.469V86.431l33.533 88.877zM869.313 232.384l-43.514 63.447 68.347-33.615 18.538 22.231-107.569 54.012-21.735-26.315 41.697-62.869-.247-.31-69.357 29.686-21.984-26.138 72.532-96.044 18.542 22.243-45.417 61.159 70.287-31.349z" />
          <path
            d="M281.427 208.068c-10.251-9.951-26.069-12.951-40.939-3.733 2.847-7.363 1.691-14.858.187-19.015-6.414-11.662-8.662-13.137-13.899-17.561-17.097-14.324-35.082-2.093-47.93 13.219l-62.116 74.028 97.65 81.925 65.5-78.047c14.971-17.838 17.282-35.523 1.547-50.816zm-126.321 35.7l37.311-44.464c4.33-5.146 14.106-4.939 20.375.341 6.908 5.795 6.929 14.002 2.289 19.54l-36.896 43.95-23.079-19.367zm102.934 7.393l-38.896 46.353-24.355-20.47 39.186-46.711c4.434-5.281 14.312-6.817 20.974-1.229 7.504 6.312 8.246 15.912 3.091 22.057z"
            fill="#333"
          />
          <radialGradient
            id="d"
            cx="-1181.576"
            cy="2174.985"
            r="1730.313"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset=".31" stop-color="#fdfdfd" />
            <stop offset=".451" stop-color="#f6f6f6" />
            <stop offset=".557" stop-color="#e9e9e9" />
            <stop offset=".646" stop-color="#d7d7d7" />
            <stop offset=".724" stop-color="#bfbfbf" />
            <stop offset=".794" stop-color="#a2a2a2" />
            <stop offset=".859" stop-color="gray" />
            <stop offset=".92" stop-color="#575757" />
            <stop offset=".975" stop-color="#2b2b2b" />
            <stop offset="1" stop-color="#141414" />
          </radialGradient>
          <path
            fill="url(#d)"
            d="M520.06 170.39l33.533-88.875v88.875h25.47V43.103h-38.279l-34.811 91.133h.33l-34.812-91.133h-38.278V170.39h25.47V81.515l33.536 88.875z"
          />
          <radialGradient
            id="e"
            cx="-1181.653"
            cy="2174.985"
            r="1730.461"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset=".31" stop-color="#fdfdfd" />
            <stop offset=".451" stop-color="#f6f6f6" />
            <stop offset=".557" stop-color="#e9e9e9" />
            <stop offset=".646" stop-color="#d7d7d7" />
            <stop offset=".724" stop-color="#bfbfbf" />
            <stop offset=".794" stop-color="#a2a2a2" />
            <stop offset=".859" stop-color="gray" />
            <stop offset=".92" stop-color="#575757" />
            <stop offset=".975" stop-color="#2b2b2b" />
            <stop offset="1" stop-color="#141414" />
          </radialGradient>
          <path
            fill="url(#e)"
            d="M869.563 223.844l-43.496 63.449 68.347-33.626 18.52 22.242-107.553 54.012-21.736-26.325 41.7-62.861-.245-.319-69.38 29.698-21.96-26.151 72.531-96.033 18.539 22.234-45.41 61.158 70.26-31.337z"
          />
          <radialGradient
            id="f"
            cx="-1181.748"
            cy="2175.493"
            r="1731.785"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset=".31" stop-color="#fdfdfd" />
            <stop offset=".451" stop-color="#f6f6f6" />
            <stop offset=".557" stop-color="#e9e9e9" />
            <stop offset=".646" stop-color="#d7d7d7" />
            <stop offset=".724" stop-color="#bfbfbf" />
            <stop offset=".794" stop-color="#a2a2a2" />
            <stop offset=".859" stop-color="gray" />
            <stop offset=".92" stop-color="#575757" />
            <stop offset=".975" stop-color="#2b2b2b" />
            <stop offset="1" stop-color="#141414" />
          </radialGradient>
          <path
            d="M276.868 205.563c-10.229-9.951-26.068-12.953-40.916-3.743 2.824-7.364 1.67-14.86.166-18.996-6.415-11.682-8.642-13.137-13.923-17.57-17.096-14.333-35.059-2.095-47.887 13.231l-62.14 74.016 97.653 81.926 65.499-78.059c14.954-17.839 17.283-35.512 1.548-50.805zm-126.316 35.698l37.307-44.453c4.312-5.155 14.086-4.949 20.376.319 6.909 5.806 6.93 14.023 2.268 19.54l-36.873 43.959-23.078-19.365zm102.951 7.393l-38.896 46.352-24.398-20.47 39.207-46.721c4.434-5.269 14.291-6.806 20.953-1.216 7.547 6.32 8.29 15.9 3.134 22.055z"
            fill="url(#f)"
          />
          <radialGradient
            id="g"
            cx="-871.677"
            cy="1935.101"
            r="466.718"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset=".104" stop-color="#d6d6d6" />
            <stop offset=".307" stop-color="#adadad" />
            <stop offset=".588" stop-color="#6c6c6c" />
            <stop offset=".933" stop-color="#121212" />
            <stop offset="1" />
          </radialGradient>
          <path
            d="M194.788 506.853c0-172.358 139.725-312.083 312.073-312.083 172.367 0 312.072 139.724 312.072 312.083 0 172.351-139.705 312.07-312.072 312.07-172.35 0-312.073-139.72-312.073-312.07z"
            fill="url(#g)"
          />
          <radialGradient
            id="h"
            cx="-744.024"
            cy="1872.327"
            r="678.742"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset=".344" stop-color="#fdfdfd" />
            <stop offset=".481" stop-color="#f6f6f6" />
            <stop offset=".582" stop-color="#eaeaea" />
            <stop offset=".665" stop-color="#d8d8d8" />
            <stop offset=".737" stop-color="#c2c2c2" />
            <stop offset=".802" stop-color="#a6a6a6" />
            <stop offset=".86" stop-color="#848484" />
            <stop offset=".913" stop-color="#5f5f5f" />
            <stop offset=".949" stop-color="#404040" />
            <stop offset=".957" stop-color="#404040" />
            <stop offset="1" stop-color="#404040" />
            <stop offset="1" />
          </radialGradient>
          <path
            d="M203.76 506.853c0-167.399 135.701-303.112 303.102-303.112s303.12 135.712 303.12 303.112S674.26 809.965 506.861 809.965 203.76 674.253 203.76 506.853z"
            fill="url(#h)"
          />
          <radialGradient
            id="i"
            cx="-943.312"
            cy="2129.614"
            r="1202.06"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".169" stop-color="#ffffff" />
            <stop offset=".196" stop-color="#e0eff7" />
            <stop offset=".241" stop-color="#b2d9ec" />
            <stop offset=".287" stop-color="#8bc5e2" />
            <stop offset=".335" stop-color="#6bb5da" />
            <stop offset=".384" stop-color="#52a9d4" />
            <stop offset=".436" stop-color="#41a0cf" />
            <stop offset=".491" stop-color="#369bcd" />
            <stop offset=".556" stop-color="#39c" />
            <stop offset=".606" stop-color="#3396c8" />
            <stop offset=".655" stop-color="#328ebc" />
            <stop offset=".705" stop-color="#3180a8" />
            <stop offset=".754" stop-color="#2f6d8c" />
            <stop offset=".803" stop-color="#2d5468" />
            <stop offset=".851" stop-color="#2a373d" />
            <stop offset=".871" stop-color="#292929" />
          </radialGradient>
          <path
            d="M203.284 506.853H506.86V203.277c-167.669 0-303.576 135.908-303.576 303.576z"
            fill="url(#i)"
          />
          <radialGradient
            id="j"
            cx="-943.312"
            cy="2129.623"
            r="1202.037"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".169" stop-color="#ffffff" />
            <stop offset=".196" stop-color="#e0eff7" />
            <stop offset=".241" stop-color="#b2d9ec" />
            <stop offset=".287" stop-color="#8bc5e2" />
            <stop offset=".335" stop-color="#6bb5da" />
            <stop offset=".384" stop-color="#52a9d4" />
            <stop offset=".436" stop-color="#41a0cf" />
            <stop offset=".491" stop-color="#369bcd" />
            <stop offset=".556" stop-color="#39c" />
            <stop offset=".606" stop-color="#3396c8" />
            <stop offset=".655" stop-color="#328ebc" />
            <stop offset=".705" stop-color="#3180a8" />
            <stop offset=".754" stop-color="#2f6d8c" />
            <stop offset=".803" stop-color="#2d5468" />
            <stop offset=".851" stop-color="#2a373d" />
            <stop offset=".871" stop-color="#292929" />
          </radialGradient>
          <path
            d="M506.86 506.853v303.578c167.667 0 303.576-135.933 303.576-303.578H506.86z"
            fill="url(#j)"
          />
          <radialGradient
            id="k"
            cx="-865.303"
            cy="1929.222"
            r="457.773"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset=".104" stop-color="#d6d6d6" />
            <stop offset=".307" stop-color="#adadad" />
            <stop offset=".588" stop-color="#6c6c6c" />
            <stop offset=".933" stop-color="#121212" />
            <stop offset="1" />
          </radialGradient>
          <path
            fill="url(#k)"
            d="M812.95 501.458H512.242V200.75h-10.766v300.708H200.768v10.767h300.708v300.717h10.766V512.225H812.95z"
          />
          <linearGradient
            id="l"
            gradientUnits="userSpaceOnUse"
            x1="-599.096"
            y1="2043.521"
            x2="-152.677"
            y2="1612.133"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#f0f4ff" />
            <stop offset=".109" stop-color="#ebeff9" />
            <stop offset=".247" stop-color="#dce0ea" />
            <stop offset=".403" stop-color="#c4c7cf" />
            <stop offset=".57" stop-color="#a2a4ab" />
            <stop offset=".747" stop-color="#76777c" />
            <stop offset=".929" stop-color="#414243" />
            <stop offset="1" stop-color="#2b2b2b" />
          </linearGradient>
          <path
            d="M512.242 209.267c160.142 2.848 289.366 132.062 292.232 292.191h5.359c-2.862-163.099-134.481-294.736-297.593-297.583l.002 5.392z"
            fill="url(#l)"
          />
          <path
            d="M208.729 501.418c2.845-160.347 132.256-289.747 292.604-292.604v-5.383c-163.336 2.856-295.12 134.669-297.987 297.986l5.383.001z"
            fill="#c2d7e8"
          />
          <linearGradient
            id="m"
            gradientUnits="userSpaceOnUse"
            x1="-961.44"
            y1="1679.306"
            x2="-515.015"
            y2="1247.911"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#f0f4ff" />
            <stop offset=".109" stop-color="#ebeff9" />
            <stop offset=".247" stop-color="#dce0ea" />
            <stop offset=".403" stop-color="#c4c7cf" />
            <stop offset=".57" stop-color="#a2a4ab" />
            <stop offset=".747" stop-color="#76777c" />
            <stop offset=".929" stop-color="#414243" />
            <stop offset="1" stop-color="#2b2b2b" />
          </linearGradient>
          <path
            d="M501.476 804.433c-160.14-2.844-289.364-132.068-292.211-292.208h-5.381c2.865 163.108 134.483 294.75 297.593 297.595l-.001-5.387z"
            fill="url(#m)"
          />
          <path
            d="M804.475 512.225c-2.866 160.14-132.092 289.364-292.232 292.208v5.387c163.11-2.845 294.747-134.485 297.593-297.595h-5.361z"
            fill="#12404f"
          />
          <linearGradient
            id="n"
            gradientUnits="userSpaceOnUse"
            x1="-745.471"
            y1="1833.135"
            x2="-513.982"
            y2="1609.44"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#c2d7e8" />
            <stop offset=".134" stop-color="#bacfe1" />
            <stop offset=".343" stop-color="#a4bacd" />
            <stop offset=".6" stop-color="#8098ac" />
            <stop offset=".894" stop-color="#4e697f" />
            <stop offset="1" stop-color="#3a566d" />
          </linearGradient>
          <path
            fill="url(#n)"
            d="M495.724 203.432v292.119h-292.11v5.764h297.862V203.432z"
          />
          <linearGradient
            id="o"
            gradientUnits="userSpaceOnUse"
            x1="-861.404"
            y1="1778.32"
            x2="-419.473"
            y2="1351.268"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#f0f4ff" />
            <stop offset=".097" stop-color="#e8ebf6" />
            <stop offset=".257" stop-color="#d1d4dd" />
            <stop offset=".459" stop-color="#abaeb5" />
            <stop offset=".695" stop-color="#78797d" />
            <stop offset=".958" stop-color="#363637" />
            <stop offset="1" stop-color="#2b2b2b" />
          </linearGradient>
          <path
            fill="url(#o)"
            d="M495.229 806.995V518.391h-289.2V512.7h294.892V806.995z"
          />
          <linearGradient
            id="p"
            gradientUnits="userSpaceOnUse"
            x1="-535.674"
            y1="1619.907"
            x2="-380.656"
            y2="1470.109"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#d9def0" />
            <stop offset=".123" stop-color="#d4daec" />
            <stop offset=".263" stop-color="#c7cfe2" />
            <stop offset=".411" stop-color="#b0bcd1" />
            <stop offset=".566" stop-color="#90a1b8" />
            <stop offset=".725" stop-color="#677f99" />
            <stop offset=".885" stop-color="#355674" />
            <stop offset=".972" stop-color="#173d5d" />
          </linearGradient>
          <path
            fill="url(#p)"
            d="M518.409 806.995V518.391h288.602V512.7H512.737V806.995z"
          />
          <linearGradient
            id="q"
            gradientUnits="userSpaceOnUse"
            x1="-694.251"
            y1="1940.398"
            x2="-252.797"
            y2="1513.809"
            gradientTransform="matrix(1 0 0 -1 1045.93 2135.176)"
          >
            <stop offset="0" stop-color="#f0f4ff" />
            <stop offset=".109" stop-color="#ebeff9" />
            <stop offset=".247" stop-color="#dce0ea" />
            <stop offset=".403" stop-color="#c4c7cf" />
            <stop offset=".57" stop-color="#a2a4ab" />
            <stop offset=".747" stop-color="#76777c" />
            <stop offset=".929" stop-color="#414243" />
            <stop offset="1" stop-color="#2b2b2b" />
          </linearGradient>
          <path
            fill="url(#q)"
            d="M518.409 206.011v288.602h288.602v5.682H512.737V206.011z"
          />
        </svg>
      ),
    },
    {
      title: "Full Stack Developer",
      company: "Google",
      type: "Part Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",

      location: "San Francisco, CA",
      icon: (
        <svg
          className="w-16 mb-4"
          viewBox="-3 0 262 262"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            fill="#4285F4"
          />
          <path
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            fill="#34A853"
          />
          <path
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            fill="#FBBC05"
          />
          <path
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            fill="#EB4335"
          />
        </svg>
      ),
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          className="w-16 mb-4"
          viewBox="0 -50 1100 1100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 776c3.333-5.333 8.666-5.667 16-1 166.666 96.667 348 145 544 145 130.666 0 259.666-24.333 387-73 3.333-1.333 8.166-3.333 14.5-6 6.333-2.667 10.833-4.667 13.5-6 10-4 17.833-2 23.5 6 5.666 8 3.833 15.333-5.5 22-12 8.667-27.334 18.667-46 30-57.334 34-121.334 60.333-192 79-70.667 18.667-139.667 28-207 28-104 0-202.334-18.167-295-54.5C162.333 909.167 79.333 858 6 792c-4-3.333-6-6.667-6-10 0-2 .666-4 2-6zm301-285c0-46 11.333-85.333 34-118 22.666-32.667 53.666-57.333 93-74 36-15.333 80.333-26.333 133-33 18-2 47.333-4.667 88-8v-17c0-42.667-4.667-71.333-14-86-14-20-36-30-66-30h-8c-22 2-41 9-57 21s-26.334 28.667-31 50c-2.667 13.333-9.334 21-20 23l-115-14c-11.334-2.667-17-8.667-17-18 0-2 .333-4.333 1-7 11.333-59.333 39.166-103.333 83.5-132C451.833 19.333 503.666 3.333 563 0h25c76 0 135.333 19.667 178 59a190.52 190.52 0 0 1 18.5 21.5c5.666 7.667 10.166 14.5 13.5 20.5 3.333 6 6.333 14.667 9 26 2.666 11.333 4.666 19.167 6 23.5 1.333 4.333 2.333 13.667 3 28 .666 14.333 1 22.833 1 25.5v242c0 17.333 2.5 33.167 7.5 47.5s9.833 24.667 14.5 31c4.666 6.333 12.333 16.5 23 30.5 4 6 6 11.333 6 16 0 5.333-2.667 10-8 14-55.334 48-85.334 74-90 78-8 6-17.667 6.667-29 2-9.334-8-17.5-15.667-24.5-23s-12-12.667-15-16-7.834-9.833-14.5-19.5c-6.667-9.667-11.334-16.167-14-19.5-37.334 40.667-74 66-110 76-22.667 6.667-50.667 10-84 10-51.334 0-93.5-15.833-126.5-47.5S303 549 303 491zm172-20c0 26 6.5 46.833 19.5 62.5S525 557 547 557c2 0 4.833-.333 8.5-1 3.666-.667 6.166-1 7.5-1 28-7.333 49.666-25.333 65-54 7.333-12.667 12.833-26.5 16.5-41.5 3.666-15 5.666-27.167 6-36.5.333-9.333.5-24.667.5-46v-25c-38.667 0-68 2.667-88 8-58.667 16.667-88 53.667-88 111zm420 322c1.333-2.667 3.333-5.333 6-8 16.666-11.333 32.666-19 48-23 25.333-6.667 50-10.333 74-11 6.666-.667 13-.333 19 1 30 2.667 48 7.667 54 15 2.666 4 4 10 4 18v7c0 23.333-6.334 50.833-19 82.5-12.667 31.667-30.334 57.167-53 76.5-3.334 2.667-6.334 4-9 4-1.334 0-2.667-.333-4-1-4-2-5-5.667-3-11 24.666-58 37-98.333 37-121 0-7.333-1.334-12.667-4-16-6.667-8-25.334-12-56-12-11.334 0-24.667.667-40 2-16.667 2-32 4-46 6-4 0-6.667-.667-8-2-1.334-1.333-1.667-2.667-1-4 0-.667.333-1.667 1-3z" />
        </svg>
      ),
    },
    {
      title: "Data Scientist",
      company: "Youtube",
      type: "Part Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          className="w-16 mb-4"
          viewBox="5.368 5.414 53.9 53.9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFF"
            d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
          />
          <path
            fill="#E8E0E0"
            d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
          />
          <path
            fill="#CD201F"
            d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
          />
        </svg>
      ),
    },
    {
      title: "Hardware Engineer",
      company: "Apple Inc.",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          className="w-16 mb-4"
          viewBox="-52.01 0 560.035 560.035"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
        </svg>
      ),
    },
  ];
  return (
    <div className="justify-center items-center text-center pb-16">
      <div className="flex justify-between mr-[-150vw] sm:mr-[-80vw] md:mr-[-75vw] lg:mr-[-35vw] xl:mr-[-55vw] ">
        <Swiper
          breakpoints={{
            1: {
              slidesPerView: 3,
              spaceBetween: 15,
            },

            665: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            // 1250: {
            //   slidesPerView: 6,
            //   spaceBetween: 30,
            // },
          }}
          loop={true}
          freeMode={true}
          grabCursor={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="mySwiper  "
        >
          {swiperData.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-white group rounded-3xl text-left pt-7 pl-6 pr-10 pb-4 h-full flex flex-col justify-between  "
              >
                {card.icon}
                <h2 className="text-xl  font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-400 text-sm font-semibold mb-7">
                  {card.company}
                </p>
                <p className="text-gray-400 font-normal text-xs mb-6">
                  {card.description}
                </p>
                <div className="flex gap-3 mb-6">
                  <div className="flex gap-2 items-center bg-[#FBFBFB] p-3 rounded-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className=" w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                      ></path>
                    </svg>
                    <p className="text-xs font-medium">{card.location}</p>
                  </div>
                  <div className="flex gap-2 items-center bg-[#FBFBFB] p-3 rounded-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      className=" w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z"></path>
                    </svg>
                    <p className="text-xs font-medium">{card.type}</p>
                  </div>
                </div>
                <div className="flex ">
                  <button className="flex items-center gap-3 text-[#00cc99] fill-[#00cc99] mb-7 group-hover:opacity-50 rounded-lg text-lg">
                    <p className="font-semibold ">Apply now</p>
                    <svg
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="h-5 w-5 "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button class="regular-button my-12">View More</button>
    </div>
  );
}
