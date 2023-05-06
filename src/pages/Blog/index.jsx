import React from "react";

import { Text, Line, Img, List, Button } from "components";

const BlogPage = () => {
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
            <div className="flex font-ibmplexsans h-[280px] md:h-[357px] justify-end mt-[101px] relative w-[49%]">
              <Line className="bg-gradient  h-1 mb-[60px] mt-auto w-[77%]" />
              <div className="absolute flex flex-col gap-5 h-full inset-[0] items-start justify-start m-auto self-stretch w-auto">
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
                  className="font-bold text-center text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Blogs
                </Text>
                <Text
                  className="font-bold text-center text-white_A700 uppercase w-auto"
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
        <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-[100px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start mb-[75px] md:ml-[0] ml-[15px] w-[79%] md:w-full">
            <div className="flex flex-col gap-[46px] items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-semibold italic text-center text-gray_900 w-auto"
                  variant="body1"
                >
                  Blog
                </Text>
                <Text
                  className="text-center text-gray_900 uppercase w-auto"
                  as="h1"
                  variant="h1"
                >
                  Read my blog
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[86px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_img_260x315.png"
                      className="h-[260px] md:h-auto object-cover w-full"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-[315px]">
                      <Text
                        className="font-semibold italic text-gray_900 text-left w-auto"
                        variant="body1"
                      >
                        10 July, 2022
                      </Text>
                      <Text
                        className="font-bold leading-[30.00px] text-gray_900_01 text-left"
                        as="h5"
                        variant="h5"
                      >
                        <>
                          12 unique example of
                          <br />
                          portfolio websites
                        </>
                      </Text>
                    </div>
                    <Line className="bg-gray_900_6c h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_img_4.png"
                      className="h-[260px] md:h-auto object-cover w-full"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-[315px]">
                      <Text
                        className="font-semibold italic text-gray_900 text-left w-auto"
                        variant="body1"
                      >
                        10 July, 2022
                      </Text>
                      <Text
                        className="font-bold leading-[30.00px] text-gray_900_01 text-left"
                        as="h5"
                        variant="h5"
                      >
                        <>
                          12 unique example of
                          <br />
                          portfolio websites
                        </>
                      </Text>
                    </div>
                    <Line className="bg-gray_900_6c h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_img_5.png"
                      className="h-[260px] md:h-auto object-cover w-full"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-[315px]">
                      <Text
                        className="font-semibold italic text-gray_900 text-left w-auto"
                        variant="body1"
                      >
                        10 July, 2022
                      </Text>
                      <Text
                        className="font-bold leading-[30.00px] text-gray_900_01 text-left"
                        as="h5"
                        variant="h5"
                      >
                        <>
                          12 unique example of
                          <br />
                          portfolio websites
                        </>
                      </Text>
                    </div>
                    <Line className="bg-gray_900_6c h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col items-center justify-start w-[18%] md:w-full">
              <Button
                className="cursor-pointer flex h-14 items-center justify-center min-w-[199px] w-auto"
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
                  Load more
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
