var customers = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      email: "nguyenvanb@gmail.com",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nguyenvanc@gmail.com",
    },
    {
      id: 4,
      name: "Nguyễn Văn D",
      email: "nguyenvand@gmail.com",
    },
  ];

  var html = `<table border="1" width="100%" cellpadding="0" cellspacing="0">
<thead>
    <tr>
        <th width = "10%">STT</th>
        <th width = "45%">Tên</th>
        <th>Email</th>
    </tr>
</thead>
</table>`
document.write(html)
for(var i=0;i<customers.length;i++){
  var html2 = `<table border="1" width="100%" cellpadding="0" cellspacing="0">

<tbody> 
<tr>
				
    <td width = "10%">${customers[i].id}</td>
    <td width = "45%">${customers[i].name}</td>
    <td>${customers[i].email}</td>

</tr>
    
</tbody>
</table>`
document.write(html2)}


