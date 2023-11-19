import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Divider,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./style.css";
import notebg from "../../../assets/note_bg.png";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ClickableStar from "./star";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote =()=>{

    dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
    onClose()

  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
    >
    <Card borderRadius={"25px"}>
      <CardBody bg={"#E1F5FE"} borderRadius={"20px"}>
        <VStack >
          <ClickableStar />
          <Heading color={"black"} >{title}</Heading>
          <Divider mt={2} mb={2} borderColor="#81D4FA" />
          <Text color={"black"} >{body}</Text>

          <Flex gap={2}>
            <>
              <Button bg={"#81D4FA"} color={"black"} onClick={onOpen}>Update</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={tempTitle}
                      m
                      placeholder="Please enter title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempBody}
                      placeholder={"Please enter description"}
                      onChange={(e) => setBody(e.target.value)}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" color={"black"} mr={3} onClick={updateNote}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button bg={"#81D4FA"} color={"black"}
              onClick={() => {
                dispatch(deleteNotes(_id));
              }}
            >
              Delete
            </Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
    </Flex>
  );
}
