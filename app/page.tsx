import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Page = async () => {
  return (
    <body className="bg-violet-100">
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8 mt-20 md:mt-32">
              Lucía Pereyra
            </h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Backend Developer
            </h1>

            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
              I’m a software developer based in Argentina. I have rich
              experience in web site design & building and customization.
            </p>

            <a
              href="#contact-me"
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-blue-300 text-gray-50 text-sm rounded-md hover:bg-blue-50 hover:text-violet-700 transition ease-linear duration-500"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-3 flex justify-center bg-gray-100 rounded-md mb-4">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h32v32H0z"></path>{" "}
                      <path
                        fill="#70AD51"
                        d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Spring Boot
              </h4>

              <p className="font-normal text-gray-500 text-md">
                I have experience in the development of web applications with
                Spring Boot.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-3 flex justify-center bg-gray-100 rounded-md mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#7fc7c6"
                  width={42}
                  height={42}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M19.48 4.54C17.1332 3.44415 14.5886 2.83523 12 2.75C9.41134 2.83523 6.8668 3.44415 4.51999 4.54C4.21866 4.68158 3.96427 4.90664 3.78702 5.18847C3.60977 5.47031 3.51709 5.79708 3.51999 6.13V17.87C3.51709 18.2029 3.60977 18.5297 3.78702 18.8115C3.96427 19.0934 4.21866 19.3184 4.51999 19.46C6.8668 20.5559 9.41134 21.1648 12 21.25C14.5886 21.1648 17.1332 20.5559 19.48 19.46C19.7813 19.3184 20.0357 19.0934 20.213 18.8115C20.3902 18.5297 20.4829 18.2029 20.48 17.87V6.13C20.4829 5.79708 20.3902 5.47031 20.213 5.18847C20.0357 4.90664 19.7813 4.68158 19.48 4.54ZM19 12.54C16.8088 13.5858 14.4264 14.1712 12 14.26C9.57362 14.1712 7.19122 13.5858 4.99999 12.54V8.68C7.20966 9.65164 9.58702 10.1848 12 10.25C14.413 10.1848 16.7903 9.65164 19 8.68V12.54ZM5.14999 5.9C7.2984 4.89285 9.62863 4.33155 12 4.25C14.3743 4.33323 16.7075 4.89442 18.86 5.9C18.9021 5.92191 18.9374 5.95492 18.9621 5.99547C18.9868 6.03601 18.9999 6.08254 19 6.13V7C16.8088 8.0458 14.4264 8.63119 12 8.72C9.57362 8.63119 7.19122 8.0458 4.99999 7V6.1C5.00524 6.05643 5.02187 6.01501 5.0482 5.9799C5.07453 5.9448 5.10964 5.91724 5.14999 5.9ZM18.85 18.1C16.7016 19.1071 14.3714 19.6684 12 19.75C9.62566 19.6668 7.29248 19.1056 5.13999 18.1C5.09789 18.0781 5.06258 18.0451 5.0379 18.0045C5.01322 17.964 5.00011 17.9175 4.99999 17.87V14.18C7.20966 15.1516 9.58702 15.6848 12 15.75C14.413 15.6848 16.7903 15.1516 19 14.18V17.87C19.0002 17.9188 18.9861 17.9666 18.9594 18.0074C18.9327 18.0483 18.8947 18.0805 18.85 18.1Z"
                      fill="#7fc7c6"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Database management
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Outstanding knowledge in the management of relational databases
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-3 flex justify-center bg-gray-100 rounded-md mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={42}
                  height={42}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 9.5V15.5M12 9.5L10 11.5M12 9.5L14 11.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">DevOps</h4>

              <p className="font-normal text-gray-500 text-md">
                Deployment of applications in the cloud with AWS and GCP
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Portfolio
              </h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                Here are my most recent personal projects.
              </p>
            </div>

            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Cinema API
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    API that allows you to manage the information of a cinema,{" "}
                    <br></br> specifically the movie billboard.
                  </p>

                  <div className="flex gap-2 mt-4">
                    <Link
                      href="https://github.com/luciapaulinapereyra/cinema-api"
                      target="_blank"
                      className="underline cursor-pointer"
                    >
                      view code
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Lulu-bot
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    WhatsApp bot that converts images into stickers, <br></br>
                    among other features.
                  </p>

                  <div className="flex gap-2 mt-4">
                    <Link
                      href="https://github.com/luciapaulinapereyra/lulubot-testing"
                      target="_blank"
                      className="underline cursor-pointer"
                    >
                      view code
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Pet API
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    API designed to give animals up for adoption.
                  </p>

                  <div className="flex gap-2 mt-4">
                    <Link
                      href="https://github.com/luciapaulinapereyra/pet-app"
                      target="_blank"
                      className="underline cursor-pointer"
                    >
                      view code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Computer Science Degree
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                UNLP computer science student. Here I learned the principles of
                programming along with my first look at Java.
              </p>

              <p>2019 – Actual</p>
            </article>

            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                SQL Database Creation Course on Udemy
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                This course was totally dedicated to SQL, creation,
                normalization and maintenance.
              </p>

              <p>August 2023</p>
            </article>

            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                JUnit and Mockito course conducted on Udemy
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                With this 15-hour guide I learned to test services and
                controllers, mocking everything necessary
              </p>
              <p>October 2022</p>
            </article>

            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Udemy course dedicated to Kubernetes
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                In this course I learned much of my current knowledge about
                Kubernetes
              </p>

              <p>August 2022</p>
            </article>

            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Java Hibernate and JPA
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Course carried out in IT Education. In this course I
                strengthened my knowledge related to queries and database
                design.
              </p>
              <p>July 2022</p>
            </article>

            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Backend with Java
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Training at the CCYD company. <br></br>
                In this training I improved my skills in spring boot and
                databases.
              </p>
              <p>April 2022</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-normal text-gray-700 text-3xl md:text-6xl lg:text-7xl mb-12 ">
              My skills
            </h1>

            <ul className="font-medium text-gray-700 text-base gap-4 flex flex-wrap justify-center">
              <li className="inline-block">Springboot</li>
              <li className="inline-block">Typescript</li>
              <li className="inline-block">Node.js</li>
              <li className="inline-block">POO</li>
              <li className="inline-block">AWS</li>
              <li className="inline-block">GCP</li>
              <li className="inline-block">Docker</li>
              <li className="inline-block">Kubernetes</li>
              <li className="inline-block">SQL</li>
              <li className="inline-block">Grafana</li>
              <li className="inline-block">JUnit5</li>
              <li className="inline-block">Keycloak</li>
              <li className="inline-block">Sonarqube</li>
              <li className="inline-block">FCM</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Experience
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places I worked
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <Link
                href="https://www.linkedin.com/company/asap-consulting-s.a./"
                target="_blank"
                className="underline cursor-pointer text-md text-pink-300"
              >
                Asap Consulting
              </Link>
              <h4 className="font-medium text-gray-700 text-lg mb-4 mt-1">
                Backend developer
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                I am currently working as a backend developer in this company. I
                work with Spring Boot and Node.js.
              </p>

              <p className="text-end">2022 - current</p>
            </article>

            <article className="bg-gray-50 px-8 py-10 rounded-md">
              <Link
                href="https://www.superprof.com.ar/desarrollo-web-back-end-con-java-springboot-jpa-mysql-para-personas-con-conocimientos-principiantes-intermedios.html"
                target="_blank"
                className="underline cursor-pointer text-md text-pink-300"
              >
                Superprof
              </Link>
              <h4 className="font-medium text-gray-700 text-lg mb-4 mt-1">
                Springboot teacher
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Given my experience in Spring Boot, I decided to teach it on
                this platform. Also, I taught courses of SQL, Java, OOP and
                JUnit5.
              </p>

              <p className="text-end">2022 - 2023</p>
            </article>
          </div>
        </div>
      </section>

      <footer
        className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52"
        id="contact-me"
      >
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
              Contact me
            </h1>

            <p className="font-normal text-gray-500 text-md md:text-lg mb-20">
              Don&apos;t hesitate to reach out to me!
            </p>

            <div className="flex items-center justify-center space-x-8">
              <Link
                href="https://www.linkedin.com/in/luc%C3%ADa-pereyra-9178621ba/"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="linkedin"
                  className="bg-violet-200 hover:bg-violet-300 transition ease-in-out duration-500 p-2 rounded-full"
                >
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-143 145 512 512"
                    width="64px"
                    height="64px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
                        <rect
                          x="-8.5"
                          y="348.4"
                          width="49.9"
                          height="159.7"
                        ></rect>{" "}
                        <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path>{" "}
                        <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </i>
              </Link>

              <Link
                href="mailto:luciapaulinapereyra@gmail.com"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="gmail"
                  className="bg-pink-200 hover:bg-pink-300 transition ease-in-out duration-500 p-2 rounded-full"
                >
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        stroke="#000000"
                        stroke-linejoin="round"
                        stroke-width="12"
                        d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                      ></path>
                    </g>
                  </svg>
                </i>
              </Link>

              <Link
                href="https://github.com/luciapaulinapereyra"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="gmail"
                  className="bg-blue-200 hover:bg-blue-300 transition ease-in-out duration-500 p-2 rounded-full"
                >
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Page;
