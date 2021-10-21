import { Router } from "express";
import Announce_lists from "../controllers/Announcements/annouce_list";
import AnnounceList from "../controllers/Announcements/AnnounceList";
import Announcements from "../Model/Announcements";

let announce_router = Router()
announce_router.post("/create",Announce_lists)
announce_router.get("/list",AnnounceList)
export default announce_router;