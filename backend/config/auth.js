// config/auth.js
const passport = require('passport');
const mongoose = require('mongoose');
const { Strategy } = require('passport-jwt');
const { User } = require('../models');
const jwtOptions = require('./jwt');