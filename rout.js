import pg from "./knexfile.js";
import express from "express"

const router = express.Router()

router.get("/", async (req, res) => {
    const result = await pg.select("*").from("users");
    res.status(200).json(result);
    console.log(result);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const result = await pg.select("*").from("users").where({ id: id });
    res.status(200).send(result);
});

router.post("/new-user", async (req, res) => {
    const { name, email } = req.body;
    let result;

    const user = await pg.select("email").from("users").where({ email: email });
    if (user.length == 0) {
        result = await pg
            .insert({
                name,
                email,
            })
            .into("users");
    } else {
        return res.send("email существует");
    }

    res.status(201).send("succes");
    console.log(result);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await pg("users").where({ id: id }).del();
    res.status(204).send("secces");
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    await pg("users").where({ id: id }).update({
        name: name,
        email: email,
    });
    res.status(200).send("norm");
});

export default router