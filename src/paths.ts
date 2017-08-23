function paths():String {
  return " \
configVersion \
developers/developer/developerKey \
developers/developer/developerSecret \
server/listeningPort \
host/acceptorId \
host/accountId \
host/accountToken \
host/autoReversalRetryLimit \
application/pinPadIdleMessage \
application/corsAllowedOrigins \
transaction/creditAvsEntryCondition \
transaction/cashbackSelections \
transaction/cashbackAmountIncrement \
transaction/maximumCashbackAmount \
transaction/tipSelections \
transaction/debitSurcharge \
transaction/creditSaleSignatureThresholdAmount \
transaction/signatureFormat \
transaction/emvFallbackAllowed \
lanes/serialLane/description \
lanes/serialLane/laneId \
lanes/serialLane/pinpad/comPort \
lanes/serialLane/pinpad/dataBits \
lanes/serialLane/pinpad/parity \
lanes/serialLane/pinpad/stopBits \
lanes/serialLane/host/terminalId \
".trim();
}


function paths_checkboxes():String {
  return " \
transaction/isTipAllowed \
application/testMode \
transaction/allowPartialApprovals \
transaction/confirmOriginalAmount \
transaction/checkForDuplicateTransactions \
transaction/isCashbackAllowed \
transaction/isDebitSupported \
transaction/isGiftSupported \
transaction/confirmConvenienceFeeAmount \
transaction/isHealthcareSupported \
lanes/serialLane/pinpad/isManualEntryAllowed \
lanes/serialLane/pinpad/isContactlessMsdEntryAllowed \
  ".trim();
}
/*
host/driver \
transaction/currencyCode \
transaction/marketCode \
lanes/serialLane/pinpad/terminalType \
lanes/serialLane/pinpad/driver
lanes/serialLane/pinpad/handshake \
lanes/serialLane/pinpad/baudRate \
*/
