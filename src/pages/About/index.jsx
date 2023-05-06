import React from "react";

import { Text, Line, Img, Button, List } from "components";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-ibmplexsans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <aside className="bg-gray_900 border-gray_900_19 border-r border-solid flex flex-col md:hidden justify-start md:px-5 w-[285px]">
            <div className="flex flex-col items-start justify-start mb-[680px] mt-14 mx-auto w-[67%]">
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
                <Line className="bg-gradient  h-1 mt-[66px] w-3/4" />
                <div className="absolute flex flex-col gap-5 h-full inset-[0] items-start justify-start m-auto self-stretch w-auto">
                  <Text
                    className="font-normal text-center text-white_A700 uppercase w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Home
                  </Text>
                  <Text
                    className="font-bold text-center text-white_A700 uppercase w-auto"
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
                Copyright ©2022 Jacob Jones. All right reserved.
              </Text>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[50px] items-start justify-start md:px-5 w-full">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 gap-[145px] items-start justify-start p-[57px] md:px-10 sm:px-5 w-full">
              <div className="md:h-[584px] h-[750px] mb-[3px] md:mt-0 mt-[43px] relative w-[33%] md:w-full">
                <div className="absolute flex flex-col gap-4 items-start justify-start left-[12%] self-stretch top-[0] w-auto">
                  <Text
                    className="font-semibold italic text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    Nice to meet you!
                  </Text>
                  <Text
                    className="text-gray_900 text-left uppercase w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Welcome to...
                  </Text>
                </div>
                <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <div className="flex h-[581px] justify-end relative w-full">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[43px] mb-[218px] ml-28 mt-auto w-auto"
                        alt="grid"
                      />
                      <div className="absolute h-[581px] inset-[0] justify-center m-auto w-full">
                        <Img
                          src="images/img_image.png"
                          className="h-[581px] m-auto object-cover w-full"
                          alt="image"
                        />
                        <Img
                          src="images/img_sign.svg"
                          className="absolute bottom-[14%] h-[111px] right-[8%] w-auto"
                          alt="sign"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start ml-auto mt-[-14.25px] self-stretch w-auto z-[1]">
                    <div className="flex flex-col gap-3 items-start justify-start w-[430px] sm:w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-center text-transparent tracking-[-2.40px] uppercase w-auto"
                        as="h1"
                        variant="h1"
                      >
                        Jacob Jones
                      </Text>
                      <Text
                        className="font-medium text-center text-gray_900 tracking-[-0.72px] w-auto"
                        as="h5"
                        variant="h5"
                      ></Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[52%] md:w-full">
                      <Button
                        className="cursor-pointer flex h-14 items-center justify-center min-w-[222px] w-auto"
                        rightIcon={
                          <div className="h-6 mb-px ml-2 pl-1 pr-[5px] w-6 bg-gray_900 py-1">
                            <Img
                              src="images/img_checkmark.svg"
                              className=""
                              alt="checkmark"
                            />
                          </div>
                        }
                        size="sm"
                        variant="FillWhiteA700"
                      >
                        <div className="font-medium text-gray_900 text-left text-lg underline">
                          Download CV
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[187px] w-[44%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex-col gap-3 grid items-center pb-[33px] sm:pr-5 pr-[33px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 flex-row items-center justify-between mr-52 my-0 w-[67%] md:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              size="mdIcn"
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
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              size="mdIcn"
                              variant="icbFillGray9000c"
                            >
                              <Img
                                src="images/img_usersuser25.svg"
                                className="h-5"
                                alt="usersuserTwentyFive"
                              />
                            </Button>
                            <Text
                              className="font-bold italic text-gray_900 text-left w-auto"
                              variant="body1"
                            >
                              25 yrs
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-gray_900_6c w-full" />
                        <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[84px] items-center justify-start mr-[60px] my-0 w-[91%] md:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              size="mdIcn"
                              variant="icbFillGray9000c"
                            >
                              <Img
                                src="images/img_communicationscommunication_gray_900.svg"
                                className="h-5"
                                alt="communicationsc"
                              />
                            </Button>
                            <Text
                              className="font-bold italic text-gray_900 text-left w-auto"
                              variant="body1"
                            >
                              jacob360@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              size="mdIcn"
                              variant="icbFillGray9000c"
                            >
                              <Img
                                src="images/img_placesicon28.svg"
                                className="h-5"
                                alt="placesiconTwentyEight"
                              />
                            </Button>
                            <Text
                              className="font-bold italic text-gray_900 text-left w-auto"
                              variant="body1"
                            >
                              United kingdom, London
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                        <div className="flex flex-row font-ibmplexsans gap-3 items-center justify-start w-[315px]">
                          <Text
                            className="bg-clip-text bg-gradient  text-center text-transparent tracking-[-2.40px] uppercase w-auto"
                            as="h1"
                            variant="h1"
                          >
                            10+
                          </Text>
                          <Text
                            className="font-bold italic leading-[20.00px] text-gray_900 text-left"
                            variant="body1"
                          >
                            <>
                              Years
                              <br />
                              experience...
                            </>
                          </Text>
                        </div>
                        <Text
                          className="font-jost font-normal leading-[24.00px] not-italic text-gray_900 text-left"
                          variant="body1"
                        ></Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                        <div className="flex flex-row gap-3 items-center justify-start w-[315px]">
                          <Text
                            className="bg-clip-text bg-gradient  text-center text-transparent tracking-[-2.40px] uppercase w-auto"
                            as="h1"
                            variant="h1"
                          >
                            14
                          </Text>
                          <Text
                            className="font-bold italic leading-[20.00px] text-gray_900 text-left"
                            variant="body1"
                          >
                            <>
                              Clients
                              <br />
                              Worldwide...
                            </>
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[24.00px] text-gray_900 text-left"
                          variant="body1"
                        >
                          <>
                            With 10+ years experience as a professional a
                            graphic designer,
                            <br />I have acquired the skills and knowledge
                            necessary to make your project a success.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-col items-center justify-start p-10 sm:px-5 w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-[580px] sm:w-full">
                      <Img
                        src="images/img_ridoublequotesr.svg"
                        className="h-16 w-16"
                        alt="ridoublequotesr"
                      />
                      <Text
                        className="font-semibold italic leading-[32.00px] max-w-[504px] md:max-w-full text-left text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Faucibus sed sit ultrices et sed metus
                        sollicitudin.”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[145px] items-center justify-start p-[115px] md:px-10 sm:px-5 w-[83%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                <div className="flex flex-col font-ibmplexsans gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-semibold italic text-left text-white_A700 w-auto"
                    variant="body1"
                  >
                    Experience
                  </Text>
                  <Text
                    className="text-left text-white_A700 uppercase w-auto"
                    as="h1"
                    variant="h1"
                  >
                    My experience
                  </Text>
                </div>
                <Text
                  className="font-jost font-normal leading-[28.00px] mt-[21px] not-italic text-left text-white_A700"
                  variant="body1"
                ></Text>
                <div className="flex flex-col font-ibmplexsans items-center justify-start mt-12 w-[68%] md:w-full">
                  <Button
                    className="cursor-pointer flex h-14 items-center justify-center min-w-[291px] w-auto"
                    rightIcon={
                      <div className="h-6 mb-0.5 ml-2 pl-1 pr-[5px] w-6 bg-gradient  py-1">
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
                      Download my resume
                    </div>
                  </Button>
                </div>
              </div>
              <List
                className="flex-col gap-10 grid items-start md:mt-0 my-1 self-stretch w-auto sm:w-full"
                orientation="vertical"
              >
                <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col items-center justify-start self-stretch w-auto">
                          <Text
                            className="font-bold italic text-left text-white_A700 w-auto"
                            variant="body1"
                          >
                            -2018 - Present
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[3px] text-right text-white_A700 w-auto"
                          variant="body2"
                        >
                          -Rolling Thunder
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-left text-white_A700 uppercase w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Lead UI/UX Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white_A700_6c h-px w-full" />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start self-stretch w-auto">
                          <Text
                            className="font-bold italic text-left text-white_A700 w-auto"
                            variant="body1"
                          >
                            -2018 - 2010
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-right text-white_A700 w-auto"
                          variant="body2"
                        >
                          -Locost Accessories
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-left text-white_A700 uppercase w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Senior UI/UX Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white_A700_6c h-px w-full" />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col items-center justify-start self-stretch w-auto">
                          <Text
                            className="font-bold italic text-left text-white_A700 w-auto"
                            variant="body1"
                          >
                            -2008 - 2006
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[3px] text-right text-white_A700 w-auto"
                          variant="body2"
                        >
                          -Sagebrush
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-left text-white_A700 uppercase w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Junior UI/UX Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white_A700_6c h-px w-full" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
