<script language="javascript">

    var Student = {
        data : [],
        viewStudent : function(){
            // Lấy danh sách sinh viên
            var listStudent = this.data;

            // Lặp và hiển thị sinh viên
            for(var i = 0; i < listStudent.length; i++){
                document.write("<div>" + listStudent[i].id + "|" + listStudent[i].name + "|" + listStudent[i].email + "</div>");
            }
        },
        addStudent : function(id, name, email){
            // Tạo thông tin sinh viên
            var item = {
                id : id,
                name : name,
                email : email
            };

            //Thêm sinh viên
            this.data.push(item);
        },
        removeStudent : function(id){
            // Lặp qua sinh viên để tìm kiếm và xóa
            for(var i = 0; i < this.data.length; i++){
                if (this.data[i].id === id) { // nếu là sinh viên cần xóa
                    this.data.splice(i, 1); // thì xóa
                }
            }
        },
        editStudent : function(id, name, email){
            // Tìm sinh viên cần edit
            for(var i = 0; i < this.data.length; i++){
                // nếu là sinh viên cần edit thì thực hiện edit
                if (this.data[i].id === id) { 
                    this.data[i].name = name;
                    this.data[i].email = email;
                }
            }
        }
    };

    document.write('<h4>Danh sách sinh viên ban đầu</h4>');
    Student.viewStudent();

    document.write('<h4>Danh sách sinh viên sau khi thêm hai sinh viên</h4>');
    Student.addStudent("sv001", 'Nguyễn Văn Cường', "thehalfheart@gmail.com");
    Student.addStudent("sv002", 'Vũ Thị Thu Tình', "freetuts.net@gmail.com");
    Student.viewStudent();

    document.write('<h4>Danh sách sinh viên sau khi xóa một sinh viên</h4>');
    Student.removeStudent('sv001');
    Student.viewStudent();

    document.write('<h4>Danh sách sinh viên sau khi sửa thông tin</h4>');
    Student.editStudent('sv002', "Tên Sinh Viên Mới", "mrcuong.winter@gmail.com");
    Student.viewStudent();
    
</script>