from django.contrib import admin
from post.models import Post

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id','rut','nombre','apellidop','apellidom','direccion','comuna','region']