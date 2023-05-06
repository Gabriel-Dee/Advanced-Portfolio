import React from "react";

import { Text, Line, Img, List } from "components";

const ServicesPage = () => {
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
            <div className="font-ibmplexsans h-[280px] md:h-[357px] mt-[101px] relative w-[54%]">
              <Line className="absolute bg-gradient  h-1 inset-x-[0] mx-auto top-[42%] w-full" />
              <div className="absolute flex flex-col gap-5 h-full inset-y-[0] items-start justify-start left-[0] my-auto self-stretch w-auto">
                <Text
                  className="font-normal text-center text-white_A700 uppercase w-auto"
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
                  className="font-bold text-center text-white_A700 uppercase w-auto"
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
              Copyright ©2022 Jacob Jones. All right reserved.
            </Text>
          </div>
        </aside>
        <div className="bg-white_A700 flex flex-1 flex-col gap-11 items-start justify-start p-20 md:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[35px] self-stretch w-auto sm:w-full">
            <Text
              className="font-semibold italic text-gray_900 text-left w-auto"
              variant="body1"
            >
              Service
            </Text>
            <Text
              className="text-gray_900 text-left uppercase w-auto"
              as="h1"
              variant="h1"
            >
              My Specialties
            </Text>
          </div>
          <div className="flex flex-col gap-[39px] items-center justify-start mb-[11px] md:ml-[0] ml-[35px] w-[84%] md:w-full">
            <List
              className="flex-col gap-[39px] grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                    <Text
                      className="font-bold md:mt-0 mt-[3px] text-gray_900 text-left uppercase w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Web Design
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:ml-[0] ml-[325px] text-gray_900_cc text-left"
                      variant="body2"
                    >
                      <>
                        You can customize a template or make your own from
                        scratch, <br />
                        with an immersive library at your disposal. You can
                        customize a template
                      </>
                    </Text>
                    <Img
                      src="images/img_pluscircle.svg"
                      className="h-10 md:ml-[0] ml-[75px] w-10"
                      alt="pluscircle"
                    />
                  </div>
                  <Line className="bg-gray_900_6c h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                    <Text
                      className="font-bold text-gray_900 text-left uppercase w-auto"
                      as="h3"
                      variant="h3"
                    >
                      UI/UX Design
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:ml-[0] ml-[303px] text-gray_900_cc text-left"
                      variant="body2"
                    >
                      <>
                        You can customize a template or make your own from
                        scratch, <br />
                        with an immersive library at your disposal. You can
                        customize a template
                      </>
                    </Text>
                    <Img
                      src="images/img_pluscircle.svg"
                      className="h-10 md:ml-[0] ml-[75px] w-10"
                      alt="pluscircle"
                    />
                  </div>
                  <Line className="bg-gray_900_6c h-px w-full" />
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                  <Text
                    className="bg-clip-text bg-gradient  font-bold md:mt-0 mt-[3px] text-left text-transparent uppercase w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Mobile Application
                  </Text>
                  <Img
                    src="images/img_img_180x430.png"
                    className="h-[180px] sm:h-auto md:mt-0 mt-0.5 object-cover w-auto md:w-full"
                    alt="img"
                  />
                  <Img
                    src="images/img_pluscircle_gray_900.svg"
                    className="h-10 w-10"
                    alt="pluscircle"
                  />
                </div>
                <Text
                  className="font-normal leading-[24.00px] mt-[30px] text-gray_900_cc text-left"
                  variant="body2"
                >
                  <>
                    You can customize a template or make your own from scratch,{" "}
                    <br />
                    with an immersive library at your disposal. You can
                    customize a template
                  </>
                </Text>
                <Line className="bg-gray_900_6c h-px mt-6 w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <Text
                    className="font-bold md:mt-0 mt-[3px] text-gray_900 text-left uppercase w-auto"
                    as="h3"
                    variant="h3"
                  >
                    User research
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:ml-[0] ml-[268px] text-gray_900_cc text-left"
                    variant="body2"
                  >
                    <>
                      You can customize a template or make your own from
                      scratch, <br />
                      with an immersive library at your disposal. You can
                      customize a template
                    </>
                  </Text>
                  <Img
                    src="images/img_pluscircle.svg"
                    className="h-10 md:ml-[0] ml-[75px] w-10"
                    alt="pluscircle_One"
                  />
                </div>
                <Line className="bg-gray_900_6c h-px w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
