export var Currency;
(function (Currency) {
    Currency["Eur"] = "EUR";
    Currency["Gbp"] = "GBP";
    Currency["Rial"] = "RIAL";
    Currency["Usd"] = "USD";
})(Currency || (Currency = {}));
export var DiscountType;
(function (DiscountType) {
    DiscountType["Flat"] = "FLAT";
    DiscountType["Percentage"] = "PERCENTAGE";
})(DiscountType || (DiscountType = {}));
export var DocumentType;
(function (DocumentType) {
    DocumentType["Image"] = "IMAGE";
    DocumentType["Other"] = "OTHER";
    DocumentType["Pdf"] = "PDF";
    DocumentType["Video"] = "VIDEO";
})(DocumentType || (DocumentType = {}));
export var MenuType;
(function (MenuType) {
    MenuType["Type1"] = "TYPE1";
    MenuType["Type2"] = "TYPE2";
})(MenuType || (MenuType = {}));
export var MessageType;
(function (MessageType) {
    MessageType["Image"] = "IMAGE";
    MessageType["Text"] = "TEXT";
    MessageType["Video"] = "VIDEO";
})(MessageType || (MessageType = {}));
export var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus["Failed"] = "FAILED";
    NotificationStatus["Pending"] = "PENDING";
    NotificationStatus["Sent"] = "SENT";
})(NotificationStatus || (NotificationStatus = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType["Error"] = "ERROR";
    NotificationType["Info"] = "INFO";
    NotificationType["Warning"] = "WARNING";
})(NotificationType || (NotificationType = {}));
export var OrderItemStatus;
(function (OrderItemStatus) {
    OrderItemStatus["Cancelled"] = "CANCELLED";
    OrderItemStatus["Delivered"] = "DELIVERED";
    OrderItemStatus["Pending"] = "PENDING";
    OrderItemStatus["Shipped"] = "SHIPPED";
})(OrderItemStatus || (OrderItemStatus = {}));
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Cancelled"] = "CANCELLED";
    OrderStatus["Completed"] = "COMPLETED";
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Processing"] = "PROCESSING";
})(OrderStatus || (OrderStatus = {}));
export var PageStatus;
(function (PageStatus) {
    PageStatus["Active"] = "ACTIVE";
    PageStatus["Inactive"] = "INACTIVE";
    PageStatus["Pending"] = "PENDING";
})(PageStatus || (PageStatus = {}));
export var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["BankTransfer"] = "BANK_TRANSFER";
    PaymentMethod["CashOnDelivery"] = "CASH_ON_DELIVERY";
    PaymentMethod["CreditCard"] = "CREDIT_CARD";
    PaymentMethod["Paypal"] = "PAYPAL";
})(PaymentMethod || (PaymentMethod = {}));
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Completed"] = "COMPLETED";
    PaymentStatus["Failed"] = "FAILED";
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Refunded"] = "REFUNDED";
})(PaymentStatus || (PaymentStatus = {}));
export var ProductType;
(function (ProductType) {
    ProductType["T0"] = "T0";
    ProductType["T1"] = "T1";
    ProductType["T2"] = "T2";
})(ProductType || (ProductType = {}));
export var ReviewRating;
(function (ReviewRating) {
    ReviewRating["Five"] = "FIVE";
    ReviewRating["Four"] = "FOUR";
    ReviewRating["One"] = "ONE";
    ReviewRating["Three"] = "THREE";
    ReviewRating["Two"] = "TWO";
})(ReviewRating || (ReviewRating = {}));
export var StockMovementType;
(function (StockMovementType) {
    StockMovementType["In"] = "IN";
    StockMovementType["Out"] = "OUT";
})(StockMovementType || (StockMovementType = {}));
export var StockStatus;
(function (StockStatus) {
    StockStatus["Discontinued"] = "DISCONTINUED";
    StockStatus["InStock"] = "IN_STOCK";
    StockStatus["OutOfStock"] = "OUT_OF_STOCK";
    StockStatus["PreOrder"] = "PRE_ORDER";
})(StockStatus || (StockStatus = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Completed"] = "COMPLETED";
    TransactionStatus["Failed"] = "FAILED";
    TransactionStatus["Pending"] = "PENDING";
})(TransactionStatus || (TransactionStatus = {}));
export var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "active";
    UserStatus["Inactive"] = "inactive";
})(UserStatus || (UserStatus = {}));
export var UserTokenStatus;
(function (UserTokenStatus) {
    UserTokenStatus["Expired"] = "EXPIRED";
    UserTokenStatus["Ok"] = "OK";
    UserTokenStatus["Revoked"] = "REVOKED";
})(UserTokenStatus || (UserTokenStatus = {}));
