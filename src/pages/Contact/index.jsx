import React from "react";

import { Text, Line, Img, Input, Button } from "components";

const ContactPage = () => {
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
            <div className="font-ibmplexsans h-[280px] md:h-[357px] mt-[101px] relative w-[51%]">
              <Line className="absolute bg-gradient  bottom-[4%] h-1 inset-x-[0] mx-auto w-full" />
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
                  className="font-normal text-center text-white_A700 uppercase w-auto"
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
        <div className="bg-white_A700 flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-start p-[114px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[31%] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
              <Text
                className="font-semibold italic text-gray_900 text-left w-auto"
                variant="body1"
              >
                Contact
              </Text>
              <Text
                className="text-gray_900 text-left uppercase w-auto"
                as="h1"
                variant="h1"
              >
                Reach out me
              </Text>
            </div>
            <Text
              className="font-normal leading-[24.00px] mt-[25px] not-italic text-gray_900 text-left tracking-[-0.48px]"
              variant="body2"
            >
              <>
                249 king Sir, 05th Floor, Ultra House Building,
                <br />
                Melboune, VIC 3000, London.
              </>
            </Text>
            <Text
              className="font-bold mt-[93px] text-gray_900 text-left w-auto"
              as="h3"
              variant="h3"
            >
              +77 022 444 05 05
            </Text>
            <Text
              className="font-bold mt-5 text-gray_900 text-left w-auto"
              as="h3"
              variant="h3"
            >
              jacob360@gmail.com
            </Text>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[75px] self-stretch w-auto sm:w-full">
              <Text
                className="font-medium text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
                variant="body2"
              >
                Facebook
              </Text>
              <Text
                className="font-medium text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
                variant="body2"
              >
                Twitter
              </Text>
              <Text
                className="font-medium text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
                variant="body2"
              >
                Instagram
              </Text>
              <Text
                className="font-medium text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
                variant="body2"
              >
                Linkedin
              </Text>
            </div>
          </div>
          <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-start md:mt-0 my-[97px] p-[63px] md:px-10 sm:px-5 w-[56%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-left text-white_A700 uppercase w-auto"
                    as="h2"
                    variant="h2"
                  >
                    any project?
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-[45px] items-center justify-between mt-[46px] w-full">
                    <Input
                      wrapClassName="sm:flex-1 w-auto sm:w-full"
                      className="font-medium p-0 placeholder:text-white_A700_a2 text-base text-left text-white_A700_a2 uppercase w-full"
                      type="text"
                      name="name"
                      placeholder="Name"
                      size="sm"
                      variant="UnderLineWhiteA700"
                    ></Input>
                    <Input
                      wrapClassName="sm:flex-1 w-auto sm:w-full"
                      className="font-medium p-0 placeholder:text-white_A700_a2 text-base text-left text-white_A700_a2 uppercase w-full"
                      type="email"
                      name="email_One"
                      placeholder="Email"
                      size="sm"
                      variant="UnderLineWhiteA700"
                    ></Input>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start mt-14 w-[605px] md:w-full">
                    <Text
                      className="font-medium text-left text-white_A700_a2 uppercase w-auto"
                      variant="body2"
                    >
                      Message
                    </Text>
                    <Line className="bg-white_A700 h-px w-full" />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start mt-4 self-stretch w-auto">
                    <Img
                      src="images/img_mdilinkvariant.svg"
                      className="h-5 w-5"
                      alt="mdilinkvariant"
                    />
                    <Text
                      className="font-medium text-left text-white_A700_a2 uppercase w-auto"
                      variant="body2"
                    >
                      Attach file
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
                  <Button
                    className="cursor-pointer flex h-14 items-center justify-center min-w-[211px] w-auto"
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
                      Submit now
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
