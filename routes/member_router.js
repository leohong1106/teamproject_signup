var MemberService = require('../service/member_DB_service')
const express = require('express');
const router = express.Router();

/* POST */
router.post('/register', function(req, res, next) {
    console.log("잘 도착했습니다.",req.body.name);
    MemberService.register(req, res, next);
    
  });
  
module.exports = router;
