from django.db.models.signals import pre_save
from django.contrib.auth.models import User
from django.dispatch import receiver

def updateUser(sender,instance,**kwargs):
    user = instance
    if user.email != '':
        user.username = user.email

# @receiver(pre_save)
# def pre_save_handler(sender, instance, *args, **kwargs):
#     if not isinstance(instance, Session):
#         instance.full_clean()
#     pass
pre_save.connect(updateUser,sender=User)
# pre_save.connect(pre_save_handler,sender=User)