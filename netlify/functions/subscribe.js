exports.handler = async (event) => {
  try {
    const { email, name, hormone1, hormone2 } = JSON.parse(event.body);

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDRlNGY1MzcyNjNlZDBlMzI3ZDNhZDU2ZTMzYTI0NDc0ZDA1ODAxNzUyZmRhODc5NTI5OTJlNmU4NTlmZTk0MmM2NDY3MzQ1YWJhYjVlMWIiLCJpYXQiOjE3Nzk4NzI5NzEuMDA2MDA1LCJuYmYiOjE3Nzk4NzI5NzEuMDA2MDA4LCJleHAiOjQ5MzU1NDY1NzEuMDAxMDg5LCJzdWIiOiIzOTkzNzUiLCJzY29wZXMiOltdfQ.Bl_K01KCuOMZWIMwC3fkWVxozOCrPppfnV3uNrkU4N_GwholapBfeXAY0DBScLZmL8DG7IR-XGhA74aD21Q2Jyy4pljMm3E4oaqdW-KcK3ob1JLkC6MazTAdcaxZE__RPCtc1BNNHKgiFldIBwboKt7k-enB6uebiysCLbSOl8oh-oxJw5YfchofrrqSH5wwS7aSZaXVpjH35WC_hidrkwcCcErRcVYHGysCoUn7GEYHecM-VZ68AjNhxvQtTwPIg5-DezB2l14BEK6391y3yUWUeYFrkCLZM5x5mZ4fS4uSDpHpm_Xvk9EUIl3Wfq-Coaj_rbtgJV49BPkiZ_2P6ZC_Qjyd9T9S1yezXrEqfCZp0eBiyygBl4hsUZcSC3m77e7fsYAniW7lT3iBbzUzgTsu3_D2jEkpQBRiKpgELdc9wtL4H-_JsPlNbHGsV5JIl1H2_Jn9APGUOhUZNzRq6eWRQUYDKUNmQlZIfEpR8JZ5zdgIYYkm1tQJ3JjOkI4DHS38h_gokduwJ8iI4tDANzmbJ-SjBMDqUvsu6q7z2nzX8J2gDFYn84HTcgpCIcwCL91n_v6nBA2BwGgnat1xiuTy9NPtIWclTCogsle-k0J-57OQDgYzeEtvxD9mth669NCjSVrjIUUpzjgYR6LON9gJjUdvVjpbPYFq59CxopM"
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
          top_hormone_1: hormone1,
          top_hormone_2: hormone2
        },
        groups: ["188610711435347541"]
      })
    });

    return {
      statusCode: response.ok ? 200 : 400,
      body: JSON.stringify({ ok: response.ok })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
