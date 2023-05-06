import React from "react";

import { Text, Line, Img, Button } from "components";

const WorksPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-ibmplexsans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <aside className="bg-gray_900 border-gray_900_19 border-r border-solid flex flex-col md:hidden justify-start md:px-5 w-[285px]">
            <div className="flex flex-col items-start justify-start mb-[1129px] mt-14 mx-auto w-[67%]">
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
                <Line className="bg-gradient  h-1 mb-[109px] mt-auto w-[87%]" />
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
                    className="font-bold text-center text-white_A700 uppercase w-auto"
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
          <div className="flex flex-1 flex-col md:gap-10 gap-16 justify-start md:px-5 w-full">
            <div className="bg-white_A700 flex flex-col items-start justify-end p-14 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[59px] mt-11 self-stretch w-auto sm:w-full">
                <Text
                  className="font-semibold italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  Work
                </Text>
                <Text
                  className="text-gray_900 text-left uppercase w-auto"
                  as="h1"
                  variant="h1"
                >
                  Recent project
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[59px] mt-[43px] w-[82%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[145px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start self-stretch w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="font-semibold italic text-gray_900 text-left w-auto"
                            variant="body1"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] text-gray_900 text-left"
                            as="h2"
                            variant="h2"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_checkmark_gray_900.svg"
                            className="h-[38px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <Img
                        src="images/img_img_248x315.png"
                        className="md:flex-1 h-[248px] sm:h-auto object-cover w-[315px] md:w-full"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="font-semibold italic text-gray_900 text-left w-auto"
                            variant="body1"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] text-gray_900 text-left"
                            as="h2"
                            variant="h2"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_checkmark_gray_900.svg"
                            className="h-[38px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <Img
                        src="images/img_img_1.png"
                        className="flex-1 md:flex-none h-[248px] sm:h-auto max-h-[248px] object-cover w-auto sm:w-auto"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start self-stretch w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="font-semibold italic text-gray_900 text-left w-auto"
                            variant="body1"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] text-gray_900 text-left"
                            as="h2"
                            variant="h2"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_checkmark_gray_900.svg"
                            className="h-[38px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <Img
                        src="images/img_img_2.png"
                        className="md:flex-1 h-[248px] sm:h-auto object-cover w-[315px] md:w-full"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start self-stretch w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="font-semibold italic text-gray_900 text-left w-auto"
                            variant="body1"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] text-gray_900 text-left"
                            as="h2"
                            variant="h2"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_checkmark_gray_900.svg"
                            className="h-[38px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <Img
                        src="images/img_img_3.png"
                        className="md:flex-1 h-[248px] sm:h-auto object-cover w-[315px] md:w-full"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[577px] mt-16 w-[14%] md:w-full">
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
            <div className="bg-gradient  flex flex-col gap-[47px] items-center justify-end md:ml-[0] ml-[115px] p-12 md:px-10 sm:px-5 w-[76%] md:w-full">
              <div className="flex flex-col gap-11 items-center justify-start mt-[52px] w-[89%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-semibold italic text-center text-white_A700 w-auto"
                    variant="body1"
                  >
                    Testimonial
                  </Text>
                  <Text
                    className="text-center text-white_A700 uppercase w-auto"
                    as="h1"
                    variant="h1"
                  >
                    What they says
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="md:h-[476px] h-[477px] relative w-[35%] md:w-full">
                        <Img
                          src="images/img_group468.png"
                          className="absolute h-[242px] left-[0] object-cover top-[0] w-auto"
                          alt="group468"
                        />
                        <Img
                          src="images/img_img_476x345.png"
                          className="absolute h-[476px] inset-[0] justify-center m-auto object-cover w-full"
                          alt="img"
                        />
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-14 items-start justify-start self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-10 items-start justify-start self-stretch w-auto sm:w-full">
                          <Text
                            className="font-semibold italic leading-[40.00px] max-w-[545px] md:max-w-full text-left text-white_A700"
                            as="h3"
                            variant="h3"
                          >
                            “ File storage made easy – including powerful
                            features you won’t find anywhere else. Whether
                            you’re.”
                          </Text>
                          <div className="flex flex-col gap-1.5 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-semibold text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              -Larry Diamond
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.16px] w-auto"
                              variant="body2"
                            >
                              Chief Executive Officer, Besnik
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrows.svg"
                          className="h-[60px] w-[134px]"
                          alt="arrows"
                        />
                      </div>
                    </div>
                    <Line className="bg-white_A700 h-px w-full" />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_logos.svg"
                className="h-[88px] w-[1006px]"
                alt="logos"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
