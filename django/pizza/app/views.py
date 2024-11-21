from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from app.models import Pizza
from app.serializers import PizzaSerializer


# Create your views here.


@api_view(['POST'])
def api_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user:
        # Создание Refresh и Access токенов
        refresh = RefreshToken.for_user(user)

        # Возвращаем только username и password
        return Response({
            "access_token": str(refresh.access_token),
            "refresh_token": str(refresh),
            "user": {
                "username": user.username,
            }
        }, status=200)
    else:
        return Response({"error": "Invalid credentials"}, status=400)


class PizzaViewset(viewsets.ModelViewSet):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer