// الإمساك بالعناصر من صفحة الـ HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// تشغيل وظيفة الإضافة عند الضغط على الزر
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // إنشاء عنصر قائمة جديد (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // إضافة زر الحذف للمهمة
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.style.backgroundColor = '#dc3545';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.padding = '5px 10px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.borderRadius = '3px';

        // برمجة زر الحذف ليحذف المهمة عند الضغط عليه
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // ربط زر الحذف بالمهمة، وربط المهمة بالقائمة
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // تفريغ مربع الإدخال بعد الإضافة
        taskInput.value = "";
    } else {
        alert("الرجاء كتابة مهمة أولاً!");
    }
});
