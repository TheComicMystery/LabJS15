let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => {
         return this.data + "";
      });
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(() => {
         this.result = callback();
      });
   },
   notification: function () {
      return () => {
         return this.result;
      };
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
