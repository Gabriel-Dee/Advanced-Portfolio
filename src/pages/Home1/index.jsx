import React from "react";

import { Text, Line, Img, Button } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-ibmplexsans sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="bg-gray_900 border-gray_900_19 border-r border-solid flex flex-col md:hidden justify-start md:px-5 w-[285px]">
          <div className="flex flex-col items-start justify-start mb-12 mt-14 mx-auto w-[67%]">
            <div className="flex flex-col font-ibmplexserif items-center justify-start w-[31%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Jac.
                </Text>
              </div>
            </div>
            <div className="font-ibmplexsans h-[280px] md:h-[357px] mt-[101px] relative w-[49%]">
              <Line className="bg-gradient  h-1 mt-[17px] w-[71%]" />
              <div className="absolute flex flex-col gap-5 h-full inset-[0] items-start justify-start m-auto self-stretch w-auto">
                <Text
                  className="font-bold text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Home
                </Text>
                <Text
                  className="font-normal text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  About
                </Text>
                <Text
                  className="font-normal text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Services
                </Text>
                <Text
                  className="font-normal text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Works
                </Text>
                <Text
                  className="font-normal text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Blogs
                </Text>
                <Text
                  className="font-normal text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Contact
                </Text>
              </div>
            </div>
            <Img
              src="images/img_socails.svg"
              className="h-36 mt-[218px] w-10"
              alt="socails"
            />
            <Text
              className="font-ibmplexsans font-normal leading-[22.00px] mt-[30px] text-left text-white_A700 w-full"
              variant="body2"
            >
              Copyright ©2023 Jacob Jones. All right reserved.
            </Text>
          </div>
        </aside>
        <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-[50px] md:px-5 w-full">
          <div className="md:h-[510px] h-[538px] sm:h-[614px] relative w-[39%] md:w-full">
            <Img
              src="images/img_vector.png"
              className="absolute h-[177px] left-[0] object-cover top-[0] w-auto"
              alt="vector"
            />
            <div className="absolute flex flex-col md:gap-10 gap-16 h-max inset-y-[0] items-start justify-start my-auto right-[0] self-stretch w-auto">
              <div className="flex flex-col gap-12 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="font-poppins leading-[90.00px] text-black_900 text-left uppercase"
                    variant="body3"
                  ></Text>
                  <Text
                    className="font-ibmplexsans font-medium text-gray_900 text-left tracking-[-0.96px] w-auto"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[48%] md:w-full">
                  <Button
                    className="cursor-pointer flex h-14 items-center justify-center min-w-[258px] w-auto"
                    rightIcon={
                      <div className="h-6 mb-px ml-2 pl-1 pr-[5px] w-6 bg-gradient  py-1">
                        <Img
                          src="images/img_checkmark.svg"
                          className=""
                          alt="checkmark"
                        />
                      </div>
                    }
                    size="sm"
                    variant="FillGray900"
                  >
                    <div className="font-medium text-left text-lg text-white_A700">
                      Let’s talk with me
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-12 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
                  <Button
                    className="flex h-8 items-center justify-center rounded-[50%] w-8"
                    size="smIcn"
                    variant="icbFillGray9000c"
                  >
                    <Img
                      src="images/img_communicationscommunication.svg"
                      className="h-5"
                      alt="communicationsc"
                    />
                  </Button>
                  <Text
                    className="font-bold italic text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    +77 022 444 05 05
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
                  <Button
                    className="flex h-8 items-center justify-center rounded-[50%] w-8"
                    size="smIcn"
                    variant="icbFillGray9000c"
                  >
                    <Img
                      src="images/img_communicationscommunication_gray_900.svg"
                      className="h-5"
                      alt="communicationsc_One"
                    />
                  </Button>
                  <Text
                    className="font-bold italic text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    jacob360@gmail.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 my-[55px] w-[43%] md:w-full">
            <div className="md:h-[691px] sm:h-[712px] h-[750px] relative w-full">
              <div className="md:h-[691px] sm:h-[712px] h-[750px] m-auto w-full">
                <div className="absolute md:h-[691px] sm:h-[712px] h-[748px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute md:h-[691px] sm:h-[712px] h-[748px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[121px] justify-start w-full">
                        <Img
                          src="images/img_vector_320x446.png"
                          className="h-80 sm:h-auto mr-[212px] object-cover w-auto md:w-full"
                          alt="vector_One"
                        />
                        <Img
                          src="images/img_vector.png"
                          className="h-[271px] sm:h-auto md:ml-[0] ml-[268px] object-cover w-auto md:w-full"
                          alt="vector_Two"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_img.png"
                      className="absolute h-[691px] inset-x-[0] mx-auto object-cover top-[0] w-[81%]"
                      alt="img"
                    />
                  </div>
                  <Img
                    src="images/img_vector_443x589.png"
                    className="absolute h-[443px] object-cover right-[0] top-[8%] w-auto"
                    alt="vector_Three"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[467px] inset-x-[0] items-end justify-end mx-auto p-[73px] md:px-10 sm:px-5 w-[92%]"
                  style={{ backgroundImage: "url('images/img_group2.png')" }}
                >
                  <Img
                    src="images/img_elements.svg"
                    className="h-[103px] mb-3.5 mt-[201px] w-auto"
                    alt="elements"
                  />
                </div>
              </div>
              <Img
                src="images/img_star.svg"
                className="absolute h-[467px] left-[9%] top-[4%] w-auto"
                alt="star"
              />
            </div>
          </div>
          <Img
            src="images/img_socials.svg"
            className="h-[316px] md:ml-[0] ml-[110px] w-auto"
            alt="socials"
          />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
