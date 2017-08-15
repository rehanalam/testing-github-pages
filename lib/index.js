/**
  * @module CalcLib
  *
  * Simple calculator API hosted on APIMATIC
  */

'use strict';

const Configuration = require('./configuration');
const SimpleCalculatorController = require('./Controllers/SimpleCalculatorController');
const OperationTypeEnum = require('./Models/OperationTypeEnum');
const CouldNotComputeException = require('./Exceptions/CouldNotComputeException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of CalcLib
    Configuration,
    // controllers of CalcLib
    SimpleCalculatorController,
    // models of CalcLib
    OperationTypeEnum,
    // exceptions of CalcLib
    CouldNotComputeException,
    APIException,
};

module.exports = initializer;
