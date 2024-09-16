const express = require("express")
const router = express.Router()

router.get("/",  (req,res)=>{
    res.render("index")
})
router.get("/register", (req,res)=>{
    res.sendFile("signUp.html", {root: "./public/"})
})
router.get("/login", (req,res)=>{
    res.sendFile("index.html", {root: "./public/"})
})
router.get("/resetpass", (req,res)=>{
    res.sendFile("resetPass.html", {root: "./public/"})
})
router.get("/facpanel", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("facPanel.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/acde", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("acde.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/employ", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("employ_det.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/publish", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("publish.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/acdind", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("acd_ind.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/thesis", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("thesis.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/relinf", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("rel_inf.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/subcomp", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("subcomp.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/last", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("last.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/print", (req,res)=>{
    if(req.cookies.userRegistered){
        res.sendFile("printpre.html", {root: "./public/"})
    }
    else res.sendFile("index.html", {root:"./public/"})
})
router.get("/logout", (req,res)=>{
    req.cookies("userRegistered", "", {
        expires: new Date(0),
        httpOnly: true
    });
    res.sendFile("index.html", {root: "./public/"})
})

module.exports = router